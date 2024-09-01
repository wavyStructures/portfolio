import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  // BehaviorSubjects to track the responsiveness
  private mobileSubject = new BehaviorSubject<boolean>(false);
  private tabletSubject = new BehaviorSubject<boolean>(false);
  private desktopSubject = new BehaviorSubject<boolean>(false);

  // Expose observables to subscribe to responsiveness changes
  isMobile$ = this.mobileSubject.asObservable();
  isTablet$ = this.tabletSubject.asObservable();
  isDesktop$ = this.desktopSubject.asObservable();

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([
        Breakpoints.Handset, // Mobile devices
        Breakpoints.Tablet, // Tablet devices
        Breakpoints.Web, // Desktop devices
      ])
      .subscribe((result) => {
        this.mobileSubject.next(result.breakpoints[Breakpoints.Handset]);
        this.tabletSubject.next(result.breakpoints[Breakpoints.Tablet]);
        this.desktopSubject.next(result.breakpoints[Breakpoints.Web]);
      });
  }
}
