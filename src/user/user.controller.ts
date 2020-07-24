import { Controller, Post, Body, Get, Param, UseGuards, UseInterceptors, UploadedFiles, UsePipes, ValidationPipe, Res, HttpStatus, HttpException, Query, BadRequestException, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { LoginUserDto } from './login-user.dto';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ValidateObjectId } from 'src/shared/validate-objectid.pipes';



@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(private userService: UserService,
        private authService: AuthService) { }



    @Post('login')
    @UsePipes(new ValidationPipe())
    async login(@Res() res, @Body() loginDTO: LoginUserDto) {

        try {
            const newUser = await this.userService.login(loginDTO);

            if (newUser == null) {
                return res.status(HttpStatus.BAD_REQUEST).json({ message: "Please you need to register first", });
            }

            const payload = {
                userId: newUser.userId,
                email: newUser.username,
            }

            const token = await this.authService.signPayLoad(payload);

            const UserObject = {
                id: newUser.userId,
                firstname: newUser.username,
                lastname: newUser.name
            }

            return res.status(HttpStatus.OK).json({
                message: "User Successfully Login",
                User: UserObject,
                token: token
            });

        } catch (error) {
            if (error.status == 401) {
                return res.status(HttpStatus.UNAUTHORIZED).json({
                    message: error.message,
                    data: error
                })
            }
            else {
                console.log(error);
                return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                    message: "Something bad happned on our end, we have been notified and we are working quickly to fix. Please try again shorlty",
                    data: error
                })
            }
        }
    }

    @Get('terminalById')
    @UsePipes(new ValidationPipe())
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    async GetTerminalById(@Res() res) {

        try {
            const terminals = await this.userService.getAllUser();
            if (terminals == null) {
                return "Ternimal not available";
            }

            return res.status(HttpStatus.OK).json(terminals);
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: error,
                message: error.message
            })
        }
    }


}


