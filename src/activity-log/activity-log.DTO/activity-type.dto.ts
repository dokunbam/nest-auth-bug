import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { isString } from 'util';

export class ActivityTypeDto {

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    description: string;
}
