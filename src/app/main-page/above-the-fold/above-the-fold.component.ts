import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResponsiveService } from '../../responsive-services/responsive.service';
import { Subscription } from 'rxjs';

import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [RouterLink, RouterOutlet, TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  isMobile = false;
  isTablet = false;
  isDesktop = false;

  constructor(private responsiveService: ResponsiveService) {
    this.responsiveService.isMobile$.subscribe(
      (isMobile) => (this.isMobile = isMobile)
    );
    this.responsiveService.isTablet$.subscribe(
      (isTablet) => (this.isTablet = isTablet)
    );
    this.responsiveService.isDesktop$.subscribe(
      (isDesktop) => (this.isDesktop = isDesktop)
    );
  }
}
