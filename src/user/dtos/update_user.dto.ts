import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';


export class UpdateUserDTO {

    @ApiProperty()
    @IsString()
    UserId: string;

    @ApiProperty()
    @IsString()
    bank_name: string;

    @ApiProperty()
    @IsString()
    account_name: string

    @ApiProperty()
    @IsString()
    account_number: string;
}
