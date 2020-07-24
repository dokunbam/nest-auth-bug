import * as mongoose from 'mongoose';

export const ActivityLogSchema = new mongoose.Schema({
    activityId: {
        type: mongoose.SchemaTypes.ObjectId,
    },
    activityuser: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "User"
    },
    activitytype: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "ActivityType"
    },
    activitydetails: {
        type: String,
        required: true
    },
    activitydate: {
        type: Date,
        required: true
    }
})