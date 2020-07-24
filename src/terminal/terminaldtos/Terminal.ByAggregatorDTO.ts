import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class GetTerminalByAggregatorDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    aggregatorId: string;

}
