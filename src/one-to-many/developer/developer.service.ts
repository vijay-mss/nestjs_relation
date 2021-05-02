import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeveloperRepository } from './developer.repository';

@Injectable()
export class DeveloperService {

    constructor(
        @InjectRepository(DeveloperRepository)
        private developerRepository: DeveloperRepository,
      ) {}

    createDeveloper(dto) {
    return  this.developerRepository.createDeveloper(dto);
    }


}
