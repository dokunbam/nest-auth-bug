import { Controller, UsePipes, Post, UseGuards, Res, Body, HttpStatus } from '@nestjs/common';
import { ActivityLogService } from './activity-log.service';
import { ValidationPipe } from '../shared/class-validation.pipe';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from '../guards/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../guards/Roles.guard';
import { ActivityTypeDto } from './activity-log.DTO/activity-type.dto';

@Controller('activity-log')
export class ActivityLogController {

    constructor(private activityLogService: ActivityLogService) { }

}
