import { Module } from '@nestjs/common';
import { ActivityLogService } from './activity-log.service';
import { ActivityLogController } from './activity-log.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivityLogSchema } from './activity-log.schema';
import { ActivityTypesSchema } from './activity-type.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'ActivityLog', schema: ActivityLogSchema }]),
  MongooseModule.forFeature([{ name: 'ActivityType', schema: ActivityTypesSchema }])],
  providers: [ActivityLogService],
  controllers: [ActivityLogController],
  exports: [MongooseModule,]
})
export class ActivityLogModule { }
