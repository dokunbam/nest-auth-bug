import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    datecreated: {
        type: Date,
        default: Date.now
    },
    date_updated: {
        type: Date,
        default: null
    }

})

UserSchema.pre('save', async function (next: mongoose.HookNextFunction) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        const hashed = await bcrypt.hash(this['password'], 10);
        this['password'] = hashed;
    }
    catch (error) {
        return next(error);
    }
})

