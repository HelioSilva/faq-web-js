import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
