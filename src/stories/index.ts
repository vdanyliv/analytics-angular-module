import {CommonModule} from '@angular/common';
import {moduleMetadata, storiesOf} from '@storybook/angular';

import {EventCheckComponent} from './components/event-check/event-check.component';
import {NgxFsAnalyticsModule} from '../../projects/ngx-fs-analytics/src/lib/ngx-fs-analytics.module';

storiesOf('Angular FireStore analytics service ', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        CommonModule,
        NgxFsAnalyticsModule.forRoot({})] // your FS config
    })
  )
  .add('Event emit', () => ({
    component: EventCheckComponent
  }));
