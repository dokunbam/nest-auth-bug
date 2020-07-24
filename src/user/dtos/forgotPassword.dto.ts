import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';


export class ForgetPasswordDto {

    @ApiProperty()
    @IsString()
    password: String;

    @ApiProperty()
    @IsString()
    token: string;
}
