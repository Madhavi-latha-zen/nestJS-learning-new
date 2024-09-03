import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class user{
    @Prop({unique:true,required:true})
    username:string

    @Prop({required:false})
    displayName?:string

    @Prop({required:false})
    avatharURL?:string
}

export const UserSchema  = SchemaFactory.createForClass(user);