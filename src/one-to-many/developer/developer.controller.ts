import { Body, Controller, Post } from '@nestjs/common';
import { DeveloperService } from './developer.service';

@Controller('developer')
export class DeveloperController {

    constructor(private developerServ:DeveloperService) {

    }

    @Post()
    createDeveloper(@Body() dto) {
      return  this.developerServ.createDeveloper(dto);
    }
}
