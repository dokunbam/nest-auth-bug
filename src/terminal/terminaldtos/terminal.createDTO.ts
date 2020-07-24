import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTerminalDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    terminalPhysicalId: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    terminalSerialNumber: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    terminalOwner: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    terminalInvestor: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    terminalType: string;
}
