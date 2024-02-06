import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-impress',
  templateUrl: './impress.component.html',
  styleUrls: ['./impress.component.scss'],
})
export class ImpressComponent {

  constructor(public home: HomeComponent) {}
}
