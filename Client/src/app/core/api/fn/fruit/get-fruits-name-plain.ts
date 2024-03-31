/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FruitModel } from '../../models/fruit-model';

export interface GetFruitsName$Plain$Params {
  name?: string;
}

export function getFruitsName$Plain(http: HttpClient, rootUrl: string, params?: GetFruitsName$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FruitModel>>> {
  const rb = new RequestBuilder(rootUrl, getFruitsName$Plain.PATH, 'get');
  if (params) {
    rb.query('name', params.name, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<FruitModel>>;
    })
  );
}

getFruitsName$Plain.PATH = '/Fruit';
