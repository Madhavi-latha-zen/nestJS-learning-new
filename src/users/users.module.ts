import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { user, UserSchema } from "src/schemas/User.schama";
import { UsersService } from "./users.service";
import { usersController } from "./users.controller";

@Module({
    imports:[
        MongooseModule.forFeature([{
            name:user.name,
            schema:UserSchema,

        }])
    ],
    providers:[UsersService],
    controllers:[usersController]
})
export class UsersModule{}