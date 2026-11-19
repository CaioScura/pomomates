import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('health')
@Controller('health')
export class HealthController {

    //verifica se esta rodando corretamente
    //endpoint para indicar se a API esta no ar corretamente
    @Get()
    check(){
        return{
            status: 'Ok',
            timestaps: new Date().toISOString(),
        };
    }
}
