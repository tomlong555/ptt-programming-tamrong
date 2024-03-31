/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FruitModel } from '../../models/fruit-model';

export interface GetFruitsName$Params {
  name?: string;
}

export function getFruitsName(http: HttpClient, rootUrl: string, params?: GetFruitsName$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FruitModel>>> {
  const rb = new RequestBuilder(rootUrl, getFruitsName.PATH, 'get');
  if (params) {
    rb.query('name', params.name, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<FruitModel>>;
    })
  );
}

getFruitsName.PATH = '/Fruit';
