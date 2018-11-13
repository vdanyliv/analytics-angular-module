import {Inject, Injectable} from '@angular/core';
import {AnalyticsConfigService} from './fs-config.service';

@Injectable()
export class NgxFsAnalyticsService {

  constructor(@Inject(AnalyticsConfigService) private config) {
    console.error(config, 'private');
  }
}
