import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ProfilesService } from "./profiles.service.js";

@Controller('profiles')
export class ProfilesController {
    constructor(private readonly profilesService: ProfilesService) {}

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.profilesService.findById(id);
    }
}
