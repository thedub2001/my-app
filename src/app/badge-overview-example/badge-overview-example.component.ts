import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge-overview-example',
  templateUrl: './badge-overview-example.component.html'
})
export class BadgeOverviewExampleComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
