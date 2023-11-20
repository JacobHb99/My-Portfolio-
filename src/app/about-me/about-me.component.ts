import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  constructor(public home: HomeComponent) {

  }
}
