export declare class user {
    username: string;
    displayName?: string;
    avatharURL?: string;
}
export declare const UserSchema: import("mongoose").Schema<user, import("mongoose").Model<user, any, any, any, import("mongoose").Document<unknown, any, user> & user & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, user, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<user>> & import("mongoose").FlatRecord<user> & {
    _id: import("mongoose").Types.ObjectId;
}>;
