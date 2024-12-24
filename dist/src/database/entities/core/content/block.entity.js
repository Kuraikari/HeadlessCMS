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
exports.BlockEntity = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const field_entity_1 = require("./field.entity");
const component_entity_1 = require("./component.entity");
let BlockEntity = class BlockEntity extends field_entity_1.FieldEntity {
    components;
};
exports.BlockEntity = BlockEntity;
__decorate([
    (0, typeorm_1.ManyToMany)(() => component_entity_1.ComponentEntity),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], BlockEntity.prototype, "components", void 0);
exports.BlockEntity = BlockEntity = __decorate([
    (0, typeorm_1.Entity)('block'),
    (0, graphql_1.ObjectType)()
], BlockEntity);
