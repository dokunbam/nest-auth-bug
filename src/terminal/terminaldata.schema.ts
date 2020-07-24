import * as mongoose from 'mongoose';

export const TerminalDataSchema = new mongoose.Schema({
    serialNumber: {
        type: String,
        required: true
    },
    terminalId: {
        type: String,
        required: true
    },
    cloc: {
        type: String,
        required: true
    },
    gpsLocation: {
        type: String,
        required: true
    },
    powerStatus: {
        type: String,
        required: true
    },
    batteryStatus: {
        type: String,
        required: true
    },
    printerStatus: {
        type: String,
        required: true
    },
    appCode: {
        type: Number,
        required: true
    },
    appName: {
        type: String,
        required: true
    },
    appVersionCode: {
        type: Number,
        required: true
    },
    datedatareceived: {
        type: Date,
        default: Date.now,
        required: true
    }
})