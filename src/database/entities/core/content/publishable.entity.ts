import { Column, Entity, OneToMany } from "typeorm";
import { BaseContentEntity } from "./basecontent.entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { FieldEntity } from "./field.entity";

export abstract class BasePublishableEntity extends BaseContentEntity {
    @Column({default: false})
    @Field()
    isDraft: boolean

    @Column({ nullable: true})
    @Field()
    publishedAt?: Date

    @OneToMany(() => FieldEntity, (field) => field.dummyField, {eager: true})
    fields: FieldEntity[]
}