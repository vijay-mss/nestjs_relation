import { EntityRepository, Repository } from "typeorm";
import { CreateProfileDto } from "../dto/create-profile.dto";
import { User } from "../user/user.entity";
import { Profile } from "./profile.entity";

@EntityRepository(Profile)
export class ProfileRepository extends Repository<Profile> {

    async createProfile(dto: CreateProfileDto) {
        const profile = new Profile();
        profile.gender = dto.gender;
        profile.photo = dto.photo;
        await this.manager.save(profile);

        const user = new User();
        user.name = dto.name;
        user.profile = profile;
        await this.manager.save(user);
        return { message: "Success" };
    }

    async getUsers() {
        // const users = await this.manager
        //     .getRepository(User)
        //     .createQueryBuilder("user")
        //     .leftJoinAndSelect("user.profile", "profile")
        //     .getMany();
        return this.manager.getRepository(User).find();
    }
}