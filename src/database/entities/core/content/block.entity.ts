import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { Field, ObjectType } from "@nestjs/graphql";
import { FieldEntity } from "./field.entity";
import { ComponentEntity } from "./component.entity";

@Entity('block')
@ObjectType()
export abstract class BlockEntity extends FieldEntity {
    @ManyToMany(() => ComponentEntity)
    @JoinTable()
    components: ComponentEntity[]
}