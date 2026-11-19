import { Controller, Get, UseGuards } from '@nestjs/common';
import { ProfilesService } from './profiles.service.js';
import { SupabaseAuthGuard, type AuthUser } from '../auth/supabase-auth.guard.js';
import { CurrentUser } from '../auth/current-user.decorator.js';

@Controller('me')
@UseGuards(SupabaseAuthGuard)
export class MeController {
    constructor(private readonly profilesService: ProfilesService) {}

    @Get()
    getMe(@CurrentUser() user: AuthUser) {
        return this.profilesService.findById(user.id);
    }
}