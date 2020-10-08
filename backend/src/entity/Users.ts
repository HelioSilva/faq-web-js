import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";

import { hash } from "bcryptjs";

export interface DTOUsers {
  email: string;
  password: string;
  url_image: string;
}

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @Column()
  url_image: string;

  @BeforeInsert()
  async generatePasswordHash(): Promise<void> {
    this.password = await hash(this.password, 8);
  }
}
