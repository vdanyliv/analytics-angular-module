import {InjectionToken} from '@angular/core';
import {AppConfigInterface} from '../interfaces/app-config.interface';

export const AnalyticsConfigService = new InjectionToken<AppConfigInterface>('AppConfigInterface');
