import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';


export class GetAgentAggregatorDto {

    @ApiProperty()
    @IsString()
    aggregatorId: String;

}
