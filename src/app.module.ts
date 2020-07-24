import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TerminalModule } from './terminal/terminal.module';
import { ActivityLogModule } from './activity-log/activity-log.module';
import { ScheduleModule } from '@nestjs/schedule';
import { RolesGuard } from './guards/Roles.guard';


//const logger: LoggerConfig = new LoggerConfig();  

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }),
    UserModule,
    AuthModule,
    TerminalModule,
    ActivityLogModule,
  ],
  controllers: [],
  providers: [{
    provide: RolesGuard,
    useClass: RolesGuard,
  },],
})
export class AppModule { }
