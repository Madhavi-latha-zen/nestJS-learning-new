// import { Injectable } from "@nestjs/common";
// import { InjectModel } from "@nestjs/mongoose";
// import { Model } from "mongoose";
// import { user } from "src/schemas/User.schama";
// import { createUserDto } from "./dto/Createuser.dto";

// @Injectable()
// export class UsersService{
//     constructor(
//         @InjectModel(user.name) private usermodel:Model<user>
//     ){}
//     createUser(createUserDto:createUserDto){
//         const newuser = new this.usermodel(createUserDto);
//         return newuser.save();
//     }
// }

import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { user } from "src/schemas/User.schama";
import { createUserDto } from "./dto/Createuser.dto";
import { UpdateUserDto } from './dto/UpdateUser.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(user.name) private usermodel: Model<user>
  ) {}

  async createUser(createUserDto: createUserDto) {
    const newUser = new this.usermodel(createUserDto);
    return newUser.save();
  }

  async getAllUsers() {
    return this.usermodel.find().exec();
  }

  async getUserById(id: string) {
    const user = await this.usermodel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const existingUser = await this.usermodel.findByIdAndUpdate(
      id,
      updateUserDto,
      { new: true }
    ).exec();

    if (!existingUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return existingUser;
  }

  async deleteUser(id: string) {
    const result = await this.usermodel.findByIdAndDelete(id).exec();

    if (!result) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return result;
  }
}
