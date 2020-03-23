import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    // console.log('context',context);
    // console.log('next',next);
    console.log('Before ...');

    // transform the response objects

    // map the response into data property
    // console.log(next.handle());

    return next.handle().pipe(map(data => ({ data: data })));
  }
}
