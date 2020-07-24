import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class TerminalDataDTO {
    @ApiProperty()
    @IsString()
    serialNumber: string;

    @ApiProperty()
    @IsString()
    terminalId: string;

    @ApiProperty()
    @IsString()
    cloc: string;

    @ApiProperty()
    @IsString()
    gpsLocation: string;

    @ApiProperty()
    @IsString()
    powerStatus: string;

    @ApiProperty()
    @IsString()
    batteryStatus: string;

    @ApiProperty()
    @IsString()
    printerStatus: string;

    @ApiProperty()
    appCode: number;

    @ApiProperty()
    @IsString()
    appName: string;

    @ApiProperty()
    appVersionCode: number;

    datedatareceived: Date;
}
