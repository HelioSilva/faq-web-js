import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinTable,
  ManyToOne,
} from "typeorm";
import { ItemQuestion } from "./ItemQuestion";

export interface DTOQuestion {
  titulo: string;
  acessos: number;
  autor: string;
}

@Entity()
export class Question {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  titulo: string;

  @Column()
  acessos: number;

  @Column()
  autor: string;

  @OneToMany(() => ItemQuestion, (item) => item.question, { eager: true })
  answers: ItemQuestion[];
}
