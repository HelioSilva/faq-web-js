import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ItemQuestion } from "./ItemQuestion";

export interface DTOQuestion {
  titulo: string;
  acessos: number;
  autor: string;
  autor_id: string;
}

@Entity("Question")
export class Question {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  titulo: string;

  @Column()
  acessos: number;

  @Column()
  autor: string;

  @Column()
  autor_id: string;

  @OneToMany(() => ItemQuestion, (item) => item.question, { eager: true })
  answers: ItemQuestion[];
}
