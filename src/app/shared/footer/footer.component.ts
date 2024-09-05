import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResponsiveService } from '../../responsive-services/responsive.service';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  // imports: [RouterLink, RouterOutlet, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit, OnDestroy {
  isMobile: boolean = false;
  isTablet: boolean = false;
  isDesktop: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(private responsiveService: ResponsiveService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.responsiveService.isMobile$.subscribe((isMobile: boolean) => {
        this.isMobile = isMobile;
      })
    );

    this.subscription.add(
      this.responsiveService.isTablet$.subscribe((isTablet: boolean) => {
        this.isTablet = isTablet;
      })
    );

    this.subscription.add(
      this.responsiveService.isDesktop$.subscribe((isDesktop: boolean) => {
        this.isDesktop = isDesktop;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
