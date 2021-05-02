import { resolve } from "node:path";
import { EntityRepository, Repository } from "typeorm";
import { TaskStatus } from "../task/task-status.enum";
import { Task } from "../task/task.entity";
import { Developer } from "./developer.entity";

@EntityRepository(Developer)
export class DeveloperRepository extends Repository<Developer> {

  async  createDeveloper(dto) {
        const developer = new Developer();
        developer.name = dto.name;
    this.saveTask(dto.tasks).then((res: any)=>{
        console.log(res, 'pp');
    developer.tasks = res;
    return    this.manager.save(developer);
    })
    //     const developer = new Developer();
    //     let task1 = new Task();
    //     task1.title = "Save Check";
    //     task1.description = "save check details";
    //     task1.status = TaskStatus['OPEN'];
    //    await this.manager.save(task1);
    //     let task2 = new Task();
    //     task2.title = "Check Details";
    //     task2.description = "get check details";
    //     task2.status = TaskStatus['OPEN'];
    //    await this.manager.save(task2);

    //     developer.name = dto.name;
    //     developer.tasks = [task1, task2];
    // new Promise((reslove)=> {
    //     dto.tasks.forEach(element => {
    //         let task = new Task();
    //         task.title = element.title;
    //         task.description = element.description;
    //         task.status = TaskStatus[element.status];
    //         this.manager.save(task);
    //         taskArr.push(task);
    //     });
       
    // })

    }

    saveTask(iArr) {
        let taskArr:any = [];
     return   new Promise((reslove)=> {
        iArr.forEach(element => {
                let task = new Task();
                task.title = element.title;
                task.description = element.description;
                task.status = TaskStatus[element.status];
                this.manager.save(task);
                taskArr.push(task);
            });
            if (iArr.length === taskArr.length) {
                reslove(taskArr);
            }
        })
    }

}