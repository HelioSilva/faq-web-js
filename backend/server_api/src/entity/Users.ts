import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
  AfterUpdate,
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
}
