import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from '../dto/create-task-dto';
import { UpdateTaskDto } from '../dto/update-task-dto';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {

    constructor(@InjectRepository(TaskRepository)  private taskRepository: TaskRepository) {}

    createTask(createTaskDto: CreateTaskDto) {
     return this.taskRepository.createTask(createTaskDto);
    }

    updateTask(updateTask: UpdateTaskDto) {
        return this.taskRepository.updateTask(updateTask);
    }

    deleteTask(id) {
      return  this.taskRepository.deleteTask(id);
    }
}
