//Atalho para pegar o usuário logado dentro do controller: @CurrentUser()

import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { AuthUser } from './supabase-auth.guard.js';

export const CurrentUser = createParamDecorator(
    (_data: unknown, context: ExecutionContext): AuthUser => {
        const request = context.switchToHttp().getRequest<{ user: AuthUser }>();
        return request.user;
    },
);