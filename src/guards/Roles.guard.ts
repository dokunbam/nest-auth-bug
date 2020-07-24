import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import * as jwt_decode from 'jwt-decode';
import { TerminalService } from "../terminal/terminal.service";


@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector, private terminalService: TerminalService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();

        const userType = request.user.usertype;

        if (userType != null) {
            return roles.some(r => r === userType);
        } else {
            const authHeader = request.headers['authorization']
            const token = authHeader && authHeader.split(' ')[1]
            var decoded = jwt_decode(token);
            if (decoded.terminalId == null) {
                throw new UnauthorizedException("Invalid Token");
            }
            const terminal = await this.terminalService.GetTerminalByIdForRoles(decoded.terminalId);

            if (terminal.terminalSerialNumber != decoded.terminalSerialNumber) {
                throw new UnauthorizedException("Invalid serial number");
            }
            if (terminal.terminalOwner == null || terminal.isDeleted == true) {
                throw new UnauthorizedException("Terminal not assigned or not available");

            }

            return roles.some(r => r === "Pos");
        }
    }
}
