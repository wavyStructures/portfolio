import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavigationService } from '../../services/navigation.service';
import { NavigationStateService } from './../../services/navigation-state.service';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, NavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isActive: boolean = false;
  isNavOpen: boolean = false;
  isClosing: boolean = false;
  isAtTop: boolean = true;
  currentLanguage: string = 'en';

  constructor(
    private translate: TranslateService,
    private router: Router,
    private viewportScroller: ViewportScroller,
    private navigationService: NavigationService,
    private navigationStateService: NavigationStateService
  ) {
    this.translate.setDefaultLang('en');
  }

  changeLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }

  ngOnInit(): void {
    this.navigationStateService.navState$.subscribe((isOpen) => {
      this.isNavOpen = isOpen;
    });
  }

  closeNav(): void {
    this.isActive = false;

    const currentUrl = this.router.url;
    if (currentUrl === '/imprint' || currentUrl === '/privacy-policy') {
      this.router.navigate(['/']);
    }
  }

  toggleNav() {
    this.navigationStateService.toggleNavState();
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
}
