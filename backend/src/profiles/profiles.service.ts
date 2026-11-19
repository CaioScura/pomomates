import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service.js";

@Injectable()
export class ProfilesService {
    constructor(private readonly prisma: PrismaService) {}

    async findById(id: string) {
        const profile = await this.prisma.profile.findUnique({ where: { id } });

        if (!profile) {
            throw new NotFoundException('Perfil não encontrado');
        }

        return profile;
    }
}
