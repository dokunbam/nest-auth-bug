import { Injectable, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LoginUserDto } from './login-user.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jwt-simple';
import { ActivityLogService } from '../activity-log/activity-log.service';
import { UpdateUserDTO } from './dtos/update_user.dto';





@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<User>,
        private activityLogService: ActivityLogService,
    ) { }
    //Login user
    private users = [
        {
            "userId": 1,
            "name": "John Doe",
            "username": "john",
            "password": "john123"
        },
        {
            "userId": 2,
            "name": "Jane Doe",
            "username": "jane",
            "password": "jane123"
        },
    ]


    async login(loginDTO: LoginUserDto) {

        const { email, password } = loginDTO;


        return await this.users.find(users => users.username == email)
    }


    async findByPayLoad(payload: any) {
        const { userId } = payload;
        return await this.userModel.findById(userId)

    }

    async getAllUser() {
        return this.users;
    }



}
