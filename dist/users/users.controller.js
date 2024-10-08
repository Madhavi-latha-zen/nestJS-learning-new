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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const Createuser_dto_1 = require("./dto/Createuser.dto");
const UpdateUser_dto_1 = require("./dto/UpdateUser.dto");
let usersController = class usersController {
    constructor(userService) {
        this.userService = userService;
    }
    async createUser(createUserDto) {
        return this.userService.createUser(createUserDto);
    }
    async getAllUsers() {
        return this.userService.getAllUsers();
    }
    async getUserById(id) {
        const user = await this.userService.getUserById(id);
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }
    async updateUser(id, updateUserDto) {
        return this.userService.updateUser(id, updateUserDto);
    }
    async deleteUser(id) {
        return this.userService.deleteUser(id);
    }
};
exports.usersController = usersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Createuser_dto_1.createUserDto]),
    __metadata("design:returntype", Promise)
], usersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], usersController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], usersController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateUser_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], usersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], usersController.prototype, "deleteUser", null);
exports.usersController = usersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], usersController);
//# sourceMappingURL=users.controller.js.map