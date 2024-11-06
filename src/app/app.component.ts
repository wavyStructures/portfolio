import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HeaderComponent } from './shared/header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationService } from './services/navigation.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    MainPageComponent,
    FooterComponent,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Anja Schwab';

  showFooter: boolean = true;

  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    AOS.init();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        //   if (fragment) {

        //     const currentRoute = this.router.routerState.snapshot.root.firstChild;
        //     this.showFooter = currentRoute?.data['showFooter'] !== false;
        //   }
        // });

        
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          // Delay scroll to allow the DOM to settle after route change
          setTimeout(() => {
            this.navigationService.scrollToSection(fragment, 120); // Adjust fixedHeaderHeight as needed
          }, 100);
        }
      });
  }
}
