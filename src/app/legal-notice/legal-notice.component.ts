import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from '../home/home.component';



@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss'],
  providers: [HttpClient]

})
export class LegalNoticeComponent {
  constructor(public home: HomeComponent) {

  }
}
