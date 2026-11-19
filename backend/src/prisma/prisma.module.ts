import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';


//ligar o prisma service no prisma module
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}