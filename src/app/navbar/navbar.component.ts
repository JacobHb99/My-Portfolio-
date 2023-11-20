import { Component, HostListener, Input, } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})



export class NavbarComponent {

  constructor(public home: HomeComponent) {

  }

  animmateNavIcon() {
    let $btn = document.getElementById('show');
    let $nav = document.getElementById('nav');;
    let $hamburger = document.getElementById('hamburger-1');;

    $hamburger!.classList.toggle("is-active");
    $nav!.classList.toggle('active');
  }
}
