/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createFruit } from '../fn/fruit/create-fruit';
import { CreateFruit$Params } from '../fn/fruit/create-fruit';
import { createFruit$Plain } from '../fn/fruit/create-fruit-plain';
import { CreateFruit$Plain$Params } from '../fn/fruit/create-fruit-plain';
import { FruitModel } from '../models/fruit-model';
import { getFruitsName } from '../fn/fruit/get-fruits-name';
import { GetFruitsName$Params } from '../fn/fruit/get-fruits-name';
import { getFruitsName$Plain } from '../fn/fruit/get-fruits-name-plain';
import { GetFruitsName$Plain$Params } from '../fn/fruit/get-fruits-name-plain';

@Injectable({ providedIn: 'root' })
export class FruitService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getFruitsName()` */
  static readonly GetFruitsNamePath = '/Fruit';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFruitsName$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFruitsName$Plain$Response(params?: GetFruitsName$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FruitModel>>> {
    return getFruitsName$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFruitsName$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFruitsName$Plain(params?: GetFruitsName$Plain$Params, context?: HttpContext): Observable<Array<FruitModel>> {
    return this.getFruitsName$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FruitModel>>): Array<FruitModel> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFruitsName()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFruitsName$Response(params?: GetFruitsName$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FruitModel>>> {
    return getFruitsName(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFruitsName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFruitsName(params?: GetFruitsName$Params, context?: HttpContext): Observable<Array<FruitModel>> {
    return this.getFruitsName$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FruitModel>>): Array<FruitModel> => r.body)
    );
  }

  /** Path part for operation `createFruit()` */
  static readonly CreateFruitPath = '/Fruit';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createFruit$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createFruit$Plain$Response(params?: CreateFruit$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return createFruit$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createFruit$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createFruit$Plain(params?: CreateFruit$Plain$Params, context?: HttpContext): Observable<boolean> {
    return this.createFruit$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createFruit()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createFruit$Response(params?: CreateFruit$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return createFruit(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createFruit$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  createFruit(params?: CreateFruit$Params, context?: HttpContext): Observable<boolean> {
    return this.createFruit$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

}
