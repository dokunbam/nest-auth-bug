import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, IsEmail, ValidateNested, isEnum, IsEnum, IsNumber } from 'class-validator';
import { UserController } from './user.controller';

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    firstname: string;

    @ApiProperty()
    @IsString()
    lastname: string;

    @ApiProperty()
    @MinLength(6, { message: "Your Password should be at least 6 characters" })
    password: string;

}
