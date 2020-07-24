import { Module, Global } from '@nestjs/common';
import { TerminalService } from './terminal.service';
import { TerminalController } from './terminal.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TerminalSchema } from './terminal.schema';
import { AuthService } from '../auth/auth.service';
import { UserModule } from '../user/user.module';
import { ActivityLogModule } from '../activity-log/activity-log.module';
import { TerminalDataSchema } from './terminaldata.schema';
import { ActivityLogService } from '../activity-log/activity-log.service';

@Global()
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Terminal', schema: TerminalSchema },]),
  MongooseModule.forFeature([{ name: 'TerminalData', schema: TerminalDataSchema },]),
    UserModule, ActivityLogModule],
  providers: [TerminalService, ActivityLogService],
  controllers: [TerminalController],
  exports: [MongooseModule, TerminalService]
})
export class TerminalModule { }
