import { Model } from "mongoose";
import { user } from "src/schemas/User.schama";
import { createUserDto } from "./dto/Createuser.dto";
import { UpdateUserDto } from './dto/UpdateUser.dto';
export declare class UsersService {
    private usermodel;
    constructor(usermodel: Model<user>);
    createUser(createUserDto: createUserDto): Promise<import("mongoose").Document<unknown, {}, user> & user & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllUsers(): Promise<(import("mongoose").Document<unknown, {}, user> & user & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getUserById(id: string): Promise<import("mongoose").Document<unknown, {}, user> & user & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<import("mongoose").Document<unknown, {}, user> & user & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteUser(id: string): Promise<import("mongoose").Document<unknown, {}, user> & user & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
