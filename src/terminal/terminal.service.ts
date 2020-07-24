import { Injectable, Scope, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Terminal } from './interfaces/terminal.interface';
import { User } from '../user/interfaces/user.interface'
import { REQUEST } from '@nestjs/core';
import { ActivityLogService } from '../activity-log/activity-log.service';
import { TerminalData } from './interfaces/terminaldata.interface';


@Injectable()
export class TerminalService {
    constructor(
        @InjectModel('Terminal') private terminalModel: Model<Terminal>,
        @InjectModel('User') private userModel: Model<User>,
        @InjectModel('TerminalData') private terminaldataModel: Model<TerminalData>,
        @Inject(REQUEST) private request: any,
        private activityLogService: ActivityLogService,

    ) { }


    GetTerminalByIdForRoles(terninalId: any) {
        const GetTerminalByIdInternally = this.terminalModel.findById(terninalId);
        return GetTerminalByIdInternally;
    }




}
