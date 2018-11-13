import {Component, OnInit} from '@angular/core';
import {NgxFsAnalyticsService} from '../../../../projects/ngx-fs-analytics/src/lib/services/ngx-fs-analytics.service';

@Component({
  selector: 'app-event-check',
  templateUrl: 'event-check.component.html'
})

export class EventCheckComponent implements OnInit {
  constructor(public analytics: NgxFsAnalyticsService) {
  }

  ngOnInit() {
  }
}
