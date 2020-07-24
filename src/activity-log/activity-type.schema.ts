import * as mongoose from 'mongoose';

export const ActivityTypesSchema = new mongoose.Schema({
    Id: {
        type: mongoose.SchemaTypes.ObjectId,
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})