import { Column, Entity, OneToMany } from "typeorm";
import { BaseContentEntity } from "./basecontent.entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { FieldEntity } from "./field.entity";

@Entity('component')
@ObjectType()
export class ComponentEntity extends BaseContentEntity {
    @Column({ nullable: false, type: "varchar"})
    @Field()
    name: string

    @Column({ nullable: false, type: "varchar"})
    @Field()
    category: string
    // Possibly store JSON of fields or set up child entities for each field
    // e.g., a one-to-many relationship with a "Field" entity

    @OneToMany(() => FieldEntity, (field) => field.dummyField, {eager: true})
    fields: FieldEntity[]
}
