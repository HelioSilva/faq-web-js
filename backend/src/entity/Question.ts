import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export interface DTOQuestion {
  titulo: string;
  acessos: number;
  autor: string;
}

@Entity()
export class Question {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  titulo: string;

  @Column()
  acessos: number;

  @Column()
  autor: string;
}
