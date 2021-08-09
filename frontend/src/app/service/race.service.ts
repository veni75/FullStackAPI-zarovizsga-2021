import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Race } from '../model/race';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class RaceService extends BaseService<Race> {

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'races';
  }
}
