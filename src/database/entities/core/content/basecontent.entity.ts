import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsEmail, Length, MinLength } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

export abstract class BaseContentEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  @Field()
  @Index()
  @MinLength(5)
  slug: string;

  @Column({ type: 'varchar', nullable: false })
  @Field()
  @MinLength(5)
  displayName: string;

  @Column({ type: 'varchar', nullable: false })
  @Field()
  @MinLength(5)
  description: string;

  @CreateDateColumn({ type: 'timestamptz' })
  @Field()
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  @Field()
  updatedAt?: Date;
}