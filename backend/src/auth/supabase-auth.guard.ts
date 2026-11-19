//Confere o token antes do controller. Sem token válido, responde 401

import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createRemoteJWKSet, jwtVerify } from 'jose';
import type { Request } from 'express';

export interface AuthUser {
    id: string;
    email?: string;
}

@Injectable()
export class SupabaseAuthGuard implements CanActivate {
    private readonly issuer: string;
    private readonly jwks: ReturnType<typeof createRemoteJWKSet>;

    constructor(config: ConfigService) {
        const supabaseUrl = config.getOrThrow<string>('SUPABASE_URL');
        this.issuer = `${supabaseUrl}/auth/v1`;
        this.jwks = createRemoteJWKSet(
            new URL(`${this.issuer}/.well-known/jwks.json`),
        );
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context
            .switchToHttp()
            .getRequest<Request & { user?: AuthUser }>();

        const token = this.extractToken(request);
        if (!token) {
            throw new UnauthorizedException('Token não informado');
        }

        try {
            const { payload } = await jwtVerify(token, this.jwks, {
                issuer: this.issuer,
                audience: 'authenticated',
            });

            if (!payload.sub) {
                throw new Error('Token sem usuário');
            }

            request.user = {
                id: payload.sub,
                email: typeof payload.email === 'string' ? payload.email : undefined,
            };
            return true;
        } catch {
            throw new UnauthorizedException('Token inválido ou expirado');
        }
    }

    private extractToken(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}