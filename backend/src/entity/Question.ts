import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { ItemQuestion } from "./ItemQuestion";

export interface DTOQuestion {
  titulo: string;
  acessos: number;
  autor: string;
  autor_id: string;
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

  @Column()
  autor_id: string;

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
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @OneToMany(() => ItemQuestion, (item) => item.question, { eager: true })
  answers: ItemQuestion[];
}
