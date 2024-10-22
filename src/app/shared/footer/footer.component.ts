import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() isInsideNavigation: boolean = false;
  @Input() isInImprint: boolean = false;

  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) {}

  navigateToTop() {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.navigationService.scrollToSection('atf');
        }, 100);
      });
    } else {
      this.navigationService.scrollToSection('atf');
    }
  }
  
}
