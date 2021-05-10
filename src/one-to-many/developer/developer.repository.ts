import { resolve } from "node:path";
import { EntityRepository, Repository } from "typeorm";
import { CreateDeveloperDto } from "../dto/create-developer.dto";
import { TaskStatus } from "../task/task-status.enum";
import { Task } from "../task/task.entity";
import { Developer } from "./developer.entity";

@EntityRepository(Developer)
export class DeveloperRepository extends Repository<Developer> {

    async createDeveloper(dto: CreateDeveloperDto) {
        const developer = new Developer();
        developer.name = dto.name;
        const taskArr = await this.manager.getRepository(Task)
            .createQueryBuilder()
            .where('id IN(:...ids) ', { ids: dto.taskArr })
            .getMany();
        developer.tasks = taskArr;
        return await this.manager.save(developer);
    }

   async getDeveloper() {
    const developerRepo = this.manager.getRepository(Developer);
    const developer = await developerRepo.find({ relations: ["tasks"] });
     return developer;
    }
}