import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class GetTerminalByTerminalInvestorDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    TerminalInvestorId: string;

}
