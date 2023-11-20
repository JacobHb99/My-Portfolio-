import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs/operators';

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
  isTablet: boolean = false;



  Breakpoints = Breakpoints;
  currentBreakpoint:string = '';


  constructor(private breakpointObserver: BreakpointObserver) {

  }

 ngOnInit(): void {

 }


  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.Handset])
    .subscribe(result => {

      const breakPoints = result.breakpoints;

      if (breakPoints[Breakpoints.Large]) {
        console.log('Screen matches TabletPortrait');
        this.hideDesktopElements = true;
        this.hideMobileElements = false;
        this.isDesktop = true;
        this.isMobile = false;
        this.isTablet = true;

        this.currentBreakpoint = Breakpoints.Large;
      } else if (breakPoints[Breakpoints.Medium]) {
        this.hideMobileElements = false;
        this.hideDesktopElements = true;
        this.isDesktop = true;
        this.isMobile = false;
        this.isTablet = true;
        this.currentBreakpoint = Breakpoints.Medium;
      }else if (breakPoints[Breakpoints.Small]) {
        this.hideMobileElements = true;
        this.hideDesktopElements = false;
        this.isDesktop = false;
        this.isMobile = true;
        this.isTablet = false;

        this.currentBreakpoint = Breakpoints.Small;
      } else {
        this.hideMobileElements = false;
        this.hideDesktopElements = true;
        this.isDesktop = false;
        this.isMobile = true;
        this.isTablet = false;


      }
      console.log("mobile", this.isMobile);
      console.log("desktop", this.isDesktop);
      console.log("tablet", this.isTablet);
      console.log("breakPoints", Breakpoints);

      console.log("currentBP", this.currentBreakpoint);
    })
}
