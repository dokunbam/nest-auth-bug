import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class AssignTerminalDTO {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    terminalId: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    agentemail: string;

    dateterminalassigned: Date;
}
