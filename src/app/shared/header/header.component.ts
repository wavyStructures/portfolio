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
    // Subscribe to the navigation state
    this.navigationStateService.navState$.subscribe((isOpen) => {
      this.isNavOpen = isOpen;
    });
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

  navigateToTop() {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.navigationService.navigateToSection('atf');
        }, 100);
      });
    } else if (this.isActive) {
      this.toggleNav();
    } else {
      this.navigationService.navigateToSection('atf');
    }
  }
}
