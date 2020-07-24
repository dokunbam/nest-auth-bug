import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TerminalService } from 'src/terminal/terminal.service';
import { Reflector } from "@nestjs/core";
var jwtDecode = require('jwt-decode');


@Injectable()
export class PosRolesGuard implements CanActivate {
  constructor(private terminalService: TerminalService) { }

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.header.Pos_api_key
    var decoded = jwtDecode.jwt_decode(token);
    const terminal = await this.terminalService.GetTerminalByIdForRoles(decoded.terminalId);

    if (terminal.terminalSerialNumber != decoded.terminalSerialNumber) {
      throw new UnauthorizedException("Invalid serial number");
    }
    if (terminal.terminalOwner == null || terminal.isDeleted == true) {
      throw new UnauthorizedException("Terminal not assigned or not available");

    }

    return true;
  }
}
