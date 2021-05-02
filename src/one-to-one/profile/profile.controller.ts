import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProfileDto } from '../dto/create-profile.dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {


    constructor(private profileService: ProfileService) {}
    @Post('/create')
    createUserProfile(@Body() dto: CreateProfileDto) {
     return this.profileService.createProfile(dto);
    }
    @Get()
    getUser() {
     return   this.profileService.getUser();
    }
}
