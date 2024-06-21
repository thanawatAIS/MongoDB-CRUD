import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dto/CreateUser.dto';
import { UpdateUserDto } from 'src/dto/UpdateUser.dto';
import { User } from 'src/schemas/User.schema';

@Injectable ()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>)
    {}

    createUser(createUserDto: CreateUserDto){
        const newUser = new this.userModel(createUserDto);
        return newUser.save();
    }

    getsUser() {
        return this.userModel.find();
    }

    getUsersById(id: string){
        return this.userModel.findById(id);
    }

    updateUser(id:string, updateUserDto: UpdateUserDto){
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new:true });
    }

    deleteUser(id:string) {
        return this.userModel.findByIdAndDelete(id);
    }
}
