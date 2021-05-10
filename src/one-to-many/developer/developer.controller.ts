import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateDeveloperDto } from '../dto/create-developer.dto';
import { DeveloperService } from './developer.service';

@Controller('developer')
export class DeveloperController {

    constructor(private developerServ:DeveloperService) {}

    @Post()
    createDeveloper(@Body() dto: CreateDeveloperDto) {
      return  this.developerServ.createDeveloper(dto);
    }

    @Get()
    getAllDevelopers() {
     return this.developerServ.getDeveloper();
    }
}
