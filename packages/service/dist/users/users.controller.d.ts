/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/CreateUser.dto';
import mongoose from 'mongoose';
import { UpdateUserDto } from 'src/dto/UpdateUser.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<mongoose.Document<unknown, {}, import("../schemas/User.schema").User> & import("../schemas/User.schema").User & {
        _id: mongoose.Types.ObjectId;
    }>;
    getUsers(): mongoose.Query<(mongoose.Document<unknown, {}, import("../schemas/User.schema").User> & import("../schemas/User.schema").User & {
        _id: mongoose.Types.ObjectId;
    })[], mongoose.Document<unknown, {}, import("../schemas/User.schema").User> & import("../schemas/User.schema").User & {
        _id: mongoose.Types.ObjectId;
    }, {}, import("../schemas/User.schema").User, "find", {}>;
    getUserById(id: string): Promise<mongoose.Document<unknown, {}, import("../schemas/User.schema").User> & import("../schemas/User.schema").User & {
        _id: mongoose.Types.ObjectId;
    }>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<mongoose.Document<unknown, {}, import("../schemas/User.schema").User> & import("../schemas/User.schema").User & {
        _id: mongoose.Types.ObjectId;
    }>;
    deleteUser(id: string): Promise<void>;
}
