import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Question } from "./Question";

export interface DTOItemQuestion {
  text: string;
  autor: string;
  question_id: string;
  autor_id: string;
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
  autor_id: string;

  @Column()
  question_id: string;

  @ManyToOne(() => Question, (item) => item.id)
  @JoinColumn({ name: "question_id" })
  question: Question;
}
