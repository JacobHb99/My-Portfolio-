import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent {
  constructor(public home: HomeComponent) {

  }
}
