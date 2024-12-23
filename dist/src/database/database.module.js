"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
// database.module.ts
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [],
        providers: [
            {
                provide: typeorm_1.DataSource,
                inject: [],
                useFactory: async () => {
                    try {
                        const dataSource = new typeorm_1.DataSource({
                            type: 'postgres',
                            host: process.env.DB_HOST,
                            port: +process.env.DB_PORT,
                            username: process.env.DB_USERNAME,
                            password: process.env.DB_PASSWORD,
                            database: process.env.DB_NAME,
                            entities: [__dirname + '/../**/*.entity.{ts,js}'],
                            synchronize: true, // Don’t use this in production without caution
                        });
                        await dataSource.initialize();
                        console.log('Database connected successfully');
                        return dataSource;
                    }
                    catch (error) {
                        console.log('Error connecting to database');
                        throw error;
                    }
                }
            }
        ],
        exports: [typeorm_1.DataSource]
    })
], DatabaseModule);
