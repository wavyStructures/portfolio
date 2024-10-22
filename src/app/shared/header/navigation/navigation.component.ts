import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavigationService } from '../../../services/navigation.service';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    FooterComponent,
    RouterModule,
    RouterLink,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  @Input() isActive!: boolean; // Input from parent
  @Output() closeNav = new EventEmitter<void>(); // Event to notify parent

  constructor(
    private router: Router,
    private translate: TranslateService,
    private navigationService: NavigationService
  ) {}

  navigateToSection(target: string) {
    const fullPageRoutes = ['imprint', 'privacy-policy'];

    if (fullPageRoutes.includes(target)) {
      this.router.navigate([`/${target}`]).then(() => {
        this.closeNav.emit();
      });
    } else {
      const fixedHeaderHeight = 300;
      this.navigationService.scrollToSection(target, fixedHeaderHeight);

      this.closeNav.emit();
    }
  }
}
