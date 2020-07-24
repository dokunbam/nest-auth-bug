import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserSchema } from './user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from '../auth/auth.service';
import { ActivityLogService } from '../activity-log/activity-log.service';
import { ActivityLogModule } from '../activity-log/activity-log.module';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), ActivityLogModule],
  providers: [UserService, AuthService, ActivityLogService],
  controllers: [UserController],
  exports: [MongooseModule, UserService]
})
export class UserModule { }
