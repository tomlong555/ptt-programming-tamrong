// Angular
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
// RxJS
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/enviroments/environment';

@Injectable()
export class InterceptService implements HttpInterceptor {
  constructor(
  ) {

  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      url: environment.webUrl + request.url,
    });

    return this.handleResponse(request, next)
  }

  private handleResponse(request: HttpRequest<any>, next: HttpHandler): Observable<any> {

    return next.handle(request).pipe(
      catchError(async (err: HttpErrorResponse) => {

        return throwError(() => err);

      }),
    );
  }
}
