import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service.js';
import { MeController } from "./me.controller.js";

@Module({
  controllers: [MeController],
  providers: [ProfilesService]
})
export class ProfilesModule {}
