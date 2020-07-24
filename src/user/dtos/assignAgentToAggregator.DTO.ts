import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';


export class AssignAgentToAggregtor {

    @ApiProperty()
    @IsString()
    agentId: string;

    @ApiProperty()
    @IsString()
    aggregatorId: string;
}
