import { Controller } from '@nestjs/common';
import { TerminalService } from './terminal.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@ApiTags('Terminal')
@Controller('terminal')
export class TerminalController {
    constructor(private terminalService: TerminalService,
        //private balanceService: BalanceService
    ) { }



}
