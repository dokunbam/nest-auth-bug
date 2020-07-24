import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class TerminalUpdateDTO {
    @ApiProperty()
    @IsString()
    terminalSerialNumber: string;

    @ApiProperty()
    @IsString()
    terminalPhysicalId: string

    @ApiProperty()
    @IsString()
    terminalType: string;
}
