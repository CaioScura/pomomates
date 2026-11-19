import { Controller, Get, UseGuards } from '@nestjs/common';
import { ProfilesService } from './profiles.service.js';
import { SupabaseAuthGuard, type AuthUser } from '../auth/supabase-auth.guard.js';
import { CurrentUser } from '../auth/current-user.decorator.js';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('me')
@ApiBearerAuth()//indica na documentação que este endpoint precisa de TOKEN
@Controller('me')
@UseGuards(SupabaseAuthGuard)
export class MeController {
    constructor(private readonly profilesService: ProfilesService) {}

    @Get()
    getMe(@CurrentUser() user: AuthUser) {
        //user.id é o id do usuário logado, tirado do token
        return this.profilesService.findById(user.id);
    }
}