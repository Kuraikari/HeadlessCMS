"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const users_service_1 = require("./users.service");
describe('UsersService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [users_service_1.UserService],
        }).compile();
        service = module.get(users_service_1.UserService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
