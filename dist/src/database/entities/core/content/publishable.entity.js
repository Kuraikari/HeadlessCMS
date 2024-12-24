"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePublishableEntity = void 0;
const typeorm_1 = require("typeorm");
const basecontent_entity_1 = require("./basecontent.entity");
const graphql_1 = require("@nestjs/graphql");
const field_entity_1 = require("./field.entity");
class BasePublishableEntity extends basecontent_entity_1.BaseContentEntity {
    isDraft;
    publishedAt;
    fields;
}
exports.BasePublishableEntity = BasePublishableEntity;
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], BasePublishableEntity.prototype, "isDraft", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], BasePublishableEntity.prototype, "publishedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => field_entity_1.FieldEntity, (field) => field.dummyField, { eager: true }),
    __metadata("design:type", Array)
], BasePublishableEntity.prototype, "fields", void 0);
