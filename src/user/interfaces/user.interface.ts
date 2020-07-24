import { Document } from 'mongoose';

export interface User extends Document {
    userId: string;
    firstname: string;
    lastname: string;
    password: string;
    passwordChanged: boolean;
    email: string;
    phonenumber: string;
    bvn: number;
    accountnumber: string;
    passportphoto: string;
    identification: string;
    proofofaddress: string;
    bankname: string;
    accountname: string;
    address: string;
    state: string;
    lga: string;
    AgentResetPassword: boolean;
    aggregator: string;
    datecreated: Date;
    hasPOS: boolean;
    isActive: boolean;
    confirmEmail: string;
    activateEmail: boolean;
    usertype: string;
    date_updated: Date;
}