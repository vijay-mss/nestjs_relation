import { EntityRepository, Repository } from "typeorm";
import { CreateTaskDto } from "../dto/create-task-dto";
import { UpdateTaskDto } from "../dto/update-task-dto";
import { TaskStatus } from "./task-status.enum";
import { Task } from "./task.entity";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {


    async createTask(dto: CreateTaskDto) {
        let task1 = new Task();
        task1.title = dto.title;
        task1.description = dto.description;
        task1.status = TaskStatus[dto.status];
        return await this.manager.save(task1);
    }

    async updateTask(dto: UpdateTaskDto) {
        let task1 = new Task();
        task1.id = dto.id;
        task1.title = dto.title;
        task1.description = dto.description;
        task1.status = TaskStatus[dto.status];
        return await this.manager.save(task1);
    }
    deleteTask(id) {
     return   this.manager.getRepository(Task).delete(id);
    }
}
