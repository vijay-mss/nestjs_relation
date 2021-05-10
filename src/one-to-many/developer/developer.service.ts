import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDeveloperDto } from '../dto/create-developer.dto';
import { DeveloperRepository } from './developer.repository';

@Injectable()
export class DeveloperService {

    constructor(
        @InjectRepository(DeveloperRepository)
        private developerRepository: DeveloperRepository,
      ) {}

    createDeveloper(dto: CreateDeveloperDto) {
    return  this.developerRepository.createDeveloper(dto);
    }
    getDeveloper() {
     return  this.developerRepository.getDeveloper();
    }

}
