import { HttpClient } from '@angular/common/http';
import { Component, HostBinding } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'portfolio';


  constructor(public http: HttpClient) {}


  ngOnInit() {
    AOS.init();    
  }
}
