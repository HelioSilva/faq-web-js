import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  Index,
} from "typeorm";

import { hash } from "bcryptjs";

export interface DTOUsers {
  email: string;
  password: string;
  url_image?: string;
}

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: "/user.png" })
  url_image: string;

  @BeforeInsert()
  async generatePasswordHash(): Promise<void> {
    this.password = await hash(this.password, 8);
  }

  getPassword(): string {
    return this.password;
  }
}
