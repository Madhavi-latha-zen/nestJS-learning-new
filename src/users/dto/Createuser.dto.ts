import { IsNotEmpty, isString, IsString } from "class-validator";

export class createUserDto{
    @IsNotEmpty()
    @IsString()
    username:string;

    @IsString()
    displayName?:string
}