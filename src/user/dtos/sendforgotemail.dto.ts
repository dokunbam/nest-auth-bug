import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';


export class SendForgetPasswordEmailDto {
    @ApiProperty()
    useremail: string;

}
