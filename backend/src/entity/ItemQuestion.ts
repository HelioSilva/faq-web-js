import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  JoinTable,
} from "typeorm";
import { Question } from "./Question";

export interface DTOItemQuestion {
  text: string;
  autor: string;
  question_id: string;
}

@Entity()
export class ItemQuestion {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  text: string;

  @Column()
  autor: string;

  @Column()
  question_id: string;

  @ManyToOne(() => Question, (item) => item.id)
  @JoinColumn({ name: "question_id" })
  question: Question;
}
