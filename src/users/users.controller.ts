import { Body, Controller, Delete, Get, Param, Post, Put, NotFoundException } from "@nestjs/common";
import { UsersService } from "./users.service";
import { createUserDto } from "./dto/Createuser.dto";
import { UpdateUserDto } from './dto/UpdateUser.dto';

@Controller('users')
export class usersController {
    constructor(private userService: UsersService) {}

    @Post()
    async createUser(@Body() createUserDto: createUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @Get()
    async getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        const user = await this.userService.getUserById(id);
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(id);
    }
}
