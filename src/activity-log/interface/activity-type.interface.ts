import { Document } from 'mongoose';

export interface ActivityType extends Document {
    name: string;
    description: string;
    date: Date;
}