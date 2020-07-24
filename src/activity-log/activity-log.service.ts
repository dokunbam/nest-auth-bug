import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ActivityLog } from './interface/activity-log.interface';
import { ActivityType } from './interface/activity-type.interface';
import { ActivityTypeDto } from './activity-log.DTO/activity-type.dto';
import { REQUEST } from '@nestjs/core';

@Injectable()
export class ActivityLogService {
    constructor(@InjectModel('ActivityLog') private activitylogModel: Model<ActivityLog>,
        @InjectModel('ActivityType') private activityTypeModel: Model<ActivityType>,
        @Inject(REQUEST) private request: any,
    ) { }

    async activitylog(activityuser: string, activitytype: string, activitydetails: string, activitydate: Date) {

        let activityType = await this.activityTypeModel.findOne({ name: activitytype })

        const activitiesLog = {
            activityuser: activityuser,
            activitytype: activityType._id,
            activitydetails: activitydetails,
            activitydate: activitydate
        }

        const activity = new this.activitylogModel(activitiesLog);
        console.log(activity);

        await activity.save()
    }

    //create activity type
    async createActivityType(activityTypeDto: ActivityTypeDto) {
        const activityType = new this.activityTypeModel(activityTypeDto);
        await activityType.save()
        return activityType;
    }

    async userActivityLog(activityType: string, combineString: string) {
        const { _id, firstname } = this.request.user
        const combinedNewString = firstname + " " + combineString;
        await this.activitylog(_id, activityType, combinedNewString, new Date)

    }

}
