import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ViewportScroller } from '@angular/common';
import {TranslateService} from '@ngx-translate/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  isMobile: boolean = false;
  isDesktop: boolean = false;
  isDesktopXl: boolean = false;
  isTablet: boolean = false;
  impressOn: boolean = false;
  Breakpoints = Breakpoints;
  currentBreakpoint: string = '';
  mobileNavActice: boolean = false;
  defaultLanguage: boolean = true;


  constructor(private breakpointObserver: BreakpointObserver, private viewportScroller: ViewportScroller, public translate: TranslateService) {

  }

  public onClick(elementId: string): void { 
    this.showContent();

    setTimeout(() => {
      this.viewportScroller.scrollToAnchor(elementId);
    }, 100);
  }

  ngOnInit(): void {

  }

  /**
   * Monitors the screen width and sets breakpoints, which are provided by Angular.
   */
  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.TabletLandscape, Breakpoints.WebLandscape, Breakpoints.XLarge, Breakpoints.Handset])
    .subscribe(result => {
      const breakPoints = result.breakpoints;

      if (breakPoints[Breakpoints.WebLandscape]) {
        this.setBreakpoint(true, false, false, true, Breakpoints.WebLandscape);
      } else if (breakPoints[Breakpoints.XLarge]) {
        this.setBreakpoint(true, true, false, true, Breakpoints.XLarge);
      } else if (breakPoints[Breakpoints.TabletLandscape]) {
        this.setBreakpoint(true, false, false, false, Breakpoints.TabletLandscape);
      } else if (breakPoints[Breakpoints.Small]) {
        this.setBreakpoint(false, false, true, false, Breakpoints.Small);
      } else {
        this.isDesktop = false;
        this.isDesktopXl = false;
        this.isMobile = true;
        this.isTablet = false;
      }
    })


    /**
     * Sets the variables to true or false, depending on the screen width.
     * @param desktop 
     * @param desktopXl 
     * @param mobile 
     * @param tablet 
     * @param breakpoint 
     */
  setBreakpoint(desktop: boolean, desktopXl: boolean, mobile: boolean, tablet: boolean, breakpoint: any) {
    this.isDesktop = desktop;
    this.isDesktopXl = desktopXl;
    this.isMobile = mobile;
    this.isTablet = tablet;
    this.currentBreakpoint = breakpoint;
    console.log('Screen matches-Portrait', this.currentBreakpoint);

  }


  /**
   * Sets the impressOn-variable to true. This will render the impress template.
   */
  showImpress() {
    this.impressOn = true;
  }


  /**
   * Sets the impressOn-variable to false. This will hide the impress template.
   */
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


  /**
   * Changes the displayed language.
   * @param clickedLanguage {string} - 'en' or 'de': defines which language should be displayed.
   */
  changeLanguage(clickedLanguage: string) {
    this.translate.use(clickedLanguage);
    this.defaultLanguage = !this.defaultLanguage;
  }
}
