import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewportScroller } from '@angular/common';

// import { Subscription } from 'rxjs';
import { ResponsiveService } from '../../responsive-services/responsive.service';
// import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isActive: boolean = false;

  constructor(
    private translate: TranslateService,
    private viewportScroller: ViewportScroller
  ) {}

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  toggleNav() {
    this.isActive = !this.isActive;
  }

  scrollToSection(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}
