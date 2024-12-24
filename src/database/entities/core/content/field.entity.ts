import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsEmail, Length, MinLength } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('field')
@ObjectType()
export class FieldEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string

  @Column({ type: 'varchar', nullable: false, unique: true })
  @Field()
  @Index()
  @MinLength(5)
  slug: string

  @Column({ type: 'varchar', nullable: false })
  @Field()
  @MinLength(5)
  displayName: string

  @Column({ type: 'varchar', nullable: false })
  @Field()
  @MinLength(5)
  description: string

  @ManyToOne(() => FieldEntity)
  @JoinColumn({ name: 'content_id'})
  dummyField: unknown
}