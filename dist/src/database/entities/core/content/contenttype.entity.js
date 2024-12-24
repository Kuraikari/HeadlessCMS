"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentTypeEntity = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const publishable_entity_1 = require("./publishable.entity");
let ContentTypeEntity = class ContentTypeEntity extends publishable_entity_1.BasePublishableEntity {
};
exports.ContentTypeEntity = ContentTypeEntity;
exports.ContentTypeEntity = ContentTypeEntity = __decorate([
    (0, typeorm_1.Entity)('content_type'),
    (0, graphql_1.ObjectType)()
], ContentTypeEntity);
