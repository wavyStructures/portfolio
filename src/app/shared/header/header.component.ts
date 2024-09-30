import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewportScroller } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, NavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isActive: boolean = false;
  isClosing: boolean = false;
  isAtTop: boolean = true;
  currentLanguage: string = 'en';

  constructor(
    private translate: TranslateService,
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {
    this.translate.setDefaultLang('en');
  }

  changeLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }

  toggleNav() {
    if (this.isActive) {
      this.isClosing = true;
      setTimeout(() => {
        this.isActive = false;
        this.isClosing = false;
        document.body.classList.remove('no-scroll');
      }, 1000);
    } else {
      this.isActive = true;
      this.isClosing = false;
      document.body.classList.add('no-scroll');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isAtTop = window.scrollY === 0; //check if at top
  }

  navigateToTop() {
    if (!this.isAtTop) {
      this.router.navigate([''], { fragment: 'atf' });
    }
    if (this.isActive) {
      this.toggleNav();
    }
  }
}
