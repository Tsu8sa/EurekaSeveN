import { Controller, Get } from '@nestjs/common';

@Controller('index')
export class IndexController {
    @Get('user')
    getUserInfo(){
        return '<h1>1</h1>'
    }

}

