import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  hideMobileElements!: boolean;
  hideDesktopElements!: boolean;
  isMobile: boolean = false;
  isDesktop: boolean = false;
  isDesktopXl: boolean = false;
  isTablet: boolean = false;
  impressOn: boolean = false;

  Breakpoints = Breakpoints;
  currentBreakpoint:string = '';
  mobileNavActice: boolean = false;


  constructor(private breakpointObserver: BreakpointObserver) {

  }

 ngOnInit(): void {

 }


  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge, Breakpoints.Handset])
    .subscribe(result => {

      const breakPoints = result.breakpoints;

      if (breakPoints[Breakpoints.Large]) {
        this.setLargeBreakpoint();
      }else if (breakPoints[Breakpoints.XLarge]) {
        this.setXLargeBreakpoint();
      } else if (breakPoints[Breakpoints.Medium]) {
        this.setMediumBreakpoint();
      }else if (breakPoints[Breakpoints.Small]) {
        this.setSmallBreakpoint();
      } else {
        this.hideMobileElements = false;
        this.hideDesktopElements = true;
        this.isDesktop = false;
        this.isDesktopXl = false;
        this.isMobile = true;
        this.isTablet = false;
      }
      console.log(this.isDesktop);
    })


    setLargeBreakpoint() {
      console.log('Screen matches large-Portrait');
      this.isDesktop = true;
      this.isDesktopXl = false;
      this.isMobile = false;
      this.isTablet = true;
      this.currentBreakpoint = Breakpoints.Large;
    }


    setXLargeBreakpoint() {
      console.log('Screen matches XL-Portrait');
      this.hideDesktopElements = true;
      this.hideMobileElements = false;
      this.isDesktop = true;
      this.isDesktopXl = true;
      this.isMobile = false;
      this.isTablet = true;
      this.currentBreakpoint = Breakpoints.XLarge;
    }


    setMediumBreakpoint() {
      console.log('Screen matches medium-Portrait');

      this.isDesktop = true;
      this.isDesktopXl = false;
      this.isMobile = false;
      this.isTablet = true;
      this.currentBreakpoint = Breakpoints.Medium;
    }


    setSmallBreakpoint() {
      this.hideMobileElements = true;
      this.hideDesktopElements = false;
      this.isDesktop = false;
      this.isDesktopXl = false;
      this.isMobile = true;
      this.isTablet = false;

      this.currentBreakpoint = Breakpoints.Small;
    }

    showImpress() {
      this.impressOn = true;
    }

    showContent() {
      this.impressOn = false;
    }


    toggleBoolean() {
      if (this.mobileNavActice) {
        this.mobileNavActice = false;
      } else {
        this.mobileNavActice = true;
      }
    }


    
}
