import {ModuleWithProviders, NgModule} from '@angular/core';
import {NgxFsAnalyticsService} from './services/ngx-fs-analytics.service';
import {AppConfigInterface} from './interfaces/app-config.interface';
import {AnalyticsConfigService} from './services/fs-config.service';

@NgModule()
export class NgxFsAnalyticsModule {
  static forRoot(config: AppConfigInterface): ModuleWithProviders {
    return {
      ngModule: NgxFsAnalyticsModule,
      providers: [
        NgxFsAnalyticsService,
        {
          provide: AnalyticsConfigService,
          useValue: config
        }
      ]
    };
  }
}
