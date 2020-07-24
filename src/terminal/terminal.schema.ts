import * as mongoose from 'mongoose';

export const TerminalSchema = new mongoose.Schema({
    terminalId: {
        type: mongoose.SchemaTypes.ObjectId,
    },

    terminalPhysicalId: {
        type: String,
        required: true
    },
    terminalSerialNumber: {
        type: String, //serial number on the terminal
        required: true
    },
    AgentPin: {
        type: String,
        default: null
    },
    isPinCreated: {
        type: Boolean,
        default: false
    },
    DateAgentPinCreatedOrUpdated: {
        type: Date,
        default: null
    },
    terminalOwner: {
        type: mongoose.SchemaTypes.ObjectId, //user email will be saved here. There will be list of users and a place to select and assign user email
        ref: 'User',
        default: null
    },
    licenseOwner: {
        type: mongoose.SchemaTypes.ObjectId, //user email will be saved here. There will be list of users and a place to select and assign user email
        ref: 'User',
        default: null
    },
    terminalInvestor: {
        type: mongoose.SchemaTypes.ObjectId, //user email will be saved here. There will be list of users and a place to select and assign user email
        ref: 'User',
        default: null
    },
    terminalType: {
        type: mongoose.SchemaTypes.ObjectId, //terminal type here, eg Desktop POS, Mobile POS, Virtual POS, Pocket POS. This can be use to sort terminal by user
        required: true,
        ref: "TerminalType"
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    datecreated: {
        type: Date,
        default: Date.now
    },
    dateupdated: {
        type: Date,
        default: null
    },
    dateterminalassigned: {
        type: Date,
        default: null
    },
    dateterminaldeleted: {
        type: Date,
        default: null
    },
    dateunassigned: {
        type: Date,
        default: null
    }
})