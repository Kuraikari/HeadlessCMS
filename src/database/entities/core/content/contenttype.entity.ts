import { Column, Entity } from "typeorm";
import { Field, ObjectType } from "@nestjs/graphql";
import { BasePublishableEntity } from "./publishable.entity";

@Entity('content_type')
@ObjectType()
export abstract class ContentTypeEntity extends BasePublishableEntity {

}