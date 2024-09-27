import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewportScroller } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
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
  currentLanguage: string = 'en';

  constructor(
    private translate: TranslateService,
    private viewportScroller: ViewportScroller
  ) {
    this.translate.setDefaultLang('en');
  }

  changeLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }

  toggleNav() {
    this.isActive = !this.isActive;
    document.body.classList.toggle('no-scoll', this.isActive);
  }
}
