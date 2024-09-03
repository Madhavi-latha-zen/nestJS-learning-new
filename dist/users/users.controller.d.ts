import { UsersService } from "./users.service";
import { createUserDto } from "./dto/Createuser.dto";
import { UpdateUserDto } from './dto/UpdateUser.dto';
export declare class usersController {
    private userService;
    constructor(userService: UsersService);
    createUser(createUserDto: createUserDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/User.schama").user> & import("../schemas/User.schama").user & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllUsers(): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/User.schama").user> & import("../schemas/User.schama").user & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getUserById(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/User.schama").user> & import("../schemas/User.schama").user & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/User.schama").user> & import("../schemas/User.schama").user & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteUser(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/User.schama").user> & import("../schemas/User.schama").user & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
