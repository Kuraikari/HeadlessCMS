import { ObjectType, Field } from '@nestjs/graphql';
import { IsEmail, Length, MinLength } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity()
@ObjectType()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  @Field()
  @IsEmail()
  @Index()
  @MinLength(5)
  email: string;

  @Column({ type: 'varchar', nullable: false })
  @Field()
  @Length(2, 55)
  firstName: string;

  @Column({ type: 'varchar', nullable: false })
  @Field()
  @Length(2, 55)
  lastName: string;

  @CreateDateColumn({ type: 'timestamptz' })
  @Field()
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  @Field()
  updatedAt?: Date;
}