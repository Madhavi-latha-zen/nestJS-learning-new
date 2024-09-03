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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const User_schama_1 = require("../schemas/User.schama");
let UsersService = class UsersService {
    constructor(usermodel) {
        this.usermodel = usermodel;
    }
    async createUser(createUserDto) {
        const newUser = new this.usermodel(createUserDto);
        return newUser.save();
    }
    async getAllUsers() {
        return this.usermodel.find().exec();
    }
    async getUserById(id) {
        const user = await this.usermodel.findById(id).exec();
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }
    async updateUser(id, updateUserDto) {
        const existingUser = await this.usermodel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
        if (!existingUser) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return existingUser;
    }
    async deleteUser(id) {
        const result = await this.usermodel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return result;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(User_schama_1.user.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map