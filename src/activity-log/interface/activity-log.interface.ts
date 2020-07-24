import { Document } from 'mongoose';

export interface ActivityLog extends Document {
    activityuser: string;
    activitytype: string;
    activitydetails: string;
    activitydate: Date;
}