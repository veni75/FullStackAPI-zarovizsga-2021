import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../model/service';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService extends BaseService<Service> {

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'services';
  }
}
