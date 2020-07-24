import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';


export class DeactivateOrActivateAgent {

    @ApiProperty()
    @IsString()
    email: string;

}
