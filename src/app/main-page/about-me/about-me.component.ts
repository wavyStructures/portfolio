import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResponsiveService } from '../../responsive-services/responsive.service';
import { Subscription } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [RouterLink, RouterOutlet, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements OnInit, OnDestroy {
  isMobile: boolean = false;
  isTablet: boolean = false;
  isDesktop: boolean = false;

  subscription: Subscription = new Subscription();

  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit() {
    // Subscribe to the combined deviceStatus$ observable
    this.subscription = this.responsiveService.deviceStatus$.subscribe(
      ({ isMobile, isTablet, isDesktop }) => {
        this.isMobile = isMobile;
        this.isTablet = isTablet;
        this.isDesktop = isDesktop;
      }
    );
  }

  ngOnDestroy() {
    // Unsubscribe when the component is destroyed
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
