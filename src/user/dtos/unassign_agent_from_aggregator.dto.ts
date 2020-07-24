import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';


export class UnAssignAgentFromAggregtor {

    @ApiProperty()
    @IsString()
    agentId: string;

}
