import { Controller, Get } from '@nestjs/common';

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
