import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
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

  /**
   * DB insert time.
   */
  @CreateDateColumn({
    type: "timestamp without time zone",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  /**
   * DB last update time.
   */
  @UpdateDateColumn({
    type: "timestamp without time zone",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @ManyToOne(() => Question, (item) => item.id)
  @JoinColumn({ name: "question_id" })
  question: Question;
}
