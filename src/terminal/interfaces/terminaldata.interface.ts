import { Document } from 'mongoose';

export interface TerminalData extends Document {
    serialNumber: string;
    terminalId: string;
    cloc: string;
    gpsLocation: string;
    powerStatus: string
    batteryStatus: string;
    printerStatus: string;
    appCode: number;
    appName: string;
    appVersionCode: number;
    datedatareceived: Date;
}