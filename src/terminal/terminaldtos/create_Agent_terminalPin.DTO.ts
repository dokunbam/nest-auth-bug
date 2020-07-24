import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateAgentTerminalPinDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    terminalId: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    agentId: string

    @ApiProperty()
    @IsInt({ message: "Pin must be a number" })
    @IsNotEmpty()
    pin: number;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    old_pin: number;
}
