import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ActivitiesLogDTO {
    activityuser: string;
    activitytype: string;
    activitydetails: string;
    activitydate: Date;
}
