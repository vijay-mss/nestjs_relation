import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProfileDto } from '../dto/create-profile.dto';
import { ProfileRepository } from './profile.repository';

@Injectable()
export class ProfileService {

    constructor(
        @InjectRepository(ProfileRepository)
        private profileRepository: ProfileRepository,
      ) {}

      createProfile(dto: CreateProfileDto) {
        return  this.profileRepository.createProfile(dto);
      }
      getUser()  {
        return  this.profileRepository.getUsers();
      }
}
