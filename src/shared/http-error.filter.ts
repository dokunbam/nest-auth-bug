import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch(HttpException)
export class HttpErrorFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) { }

    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            method: request.method,
            message: status != HttpStatus.INTERNAL_SERVER_ERROR ? exception.message || null : 'Internal Server Error',

        });
        /*
                const errorResponse = {
                    code: status,
                    timestamp: new Date().toLocaleDateString(),
                    path: request.url,
                    method: request.method,
                    message: status != HttpStatus.INTERNAL_SERVER_ERROR ? exception.message || null : 'Internal Server Error',
                };
        
                 response.status(status).json(errorResponse);*/

    }
}