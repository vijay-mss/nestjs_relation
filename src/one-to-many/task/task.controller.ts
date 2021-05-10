import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create-task-dto';
import { UpdateTaskDto } from '../dto/update-task-dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

    constructor(private taskService: TaskService) {}

    @Post()
    createTask(@Body() createTask: CreateTaskDto) {
     return this.taskService.createTask(createTask);
    }
    @Put('/updateTask')
    updateTask(@Body() updateTask: UpdateTaskDto) {
     return  this.taskService.updateTask(updateTask);
    }
    @Get('/delete/:id')
    deleteTask(@Param('id') id) {
     return  this.taskService.deleteTask(+id);
    }

}
