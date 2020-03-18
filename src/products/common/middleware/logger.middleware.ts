import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { from } from 'rxjs';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('Logger middleware run ...');
    next();
  }
}
