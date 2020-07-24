import { Document } from 'mongoose';

export interface Terminal extends Document {
    readonly terminalId: string;
    readonly terminalPhysicalId: string;
    readonly terminalSerialNumber: string;
    readonly terminalOwner: string;
    readonly terminalType: string;
    readonly agentemail: string;
    readonly isDeleted: boolean;
    readonly licenseOwner: string;
    readonly terminalInvestor: string;
    readonly AgentPin: string;
    readonly isPinCreated: boolean,
    readonly datecreated: Date;
    readonly dateterminalassigned: Date;
    readonly dateterminaldeleted: Date;
    readonly dateunassigned: Date;
}