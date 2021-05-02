import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "../task/task.entity";

@Entity()
export class Developer extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;

    @OneToMany(()=>Task, task => task.developer)
    tasks: Task[];

}