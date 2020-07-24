import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class GetTerminalByAgentDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    agentId: string;

}
