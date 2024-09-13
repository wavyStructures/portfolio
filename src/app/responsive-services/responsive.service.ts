import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  isMobile$: Observable<boolean>;
  isTablet$: Observable<boolean>;
  isDesktop$: Observable<boolean>;

  // Combined stream
  deviceStatus$: Observable<{
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
  }>;

  constructor(private breakpointObserver: BreakpointObserver) {
    // Define individual observables
    this.isMobile$ = this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(map((result) => result.matches));

    this.isTablet$ = this.breakpointObserver
      .observe([Breakpoints.Tablet])
      .pipe(map((result) => result.matches));

    this.isDesktop$ = this.breakpointObserver
      .observe([Breakpoints.Web])
      .pipe(map((result) => result.matches));

    // Combine the streams using combineLatest
    this.deviceStatus$ = combineLatest([
      this.isMobile$,
      this.isTablet$,
      this.isDesktop$,
    ]).pipe(
      map(([isMobile, isTablet, isDesktop]) => ({
        isMobile,
        isTablet,
        isDesktop,
      }))
    );
  }
}
