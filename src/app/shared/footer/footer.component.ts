import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
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
  @Input() isInsideImprint: boolean = false;

  constructor(private navigationService: NavigationService) {}

  navigateToTop(): void {
    this.navigationService.navigateToSection('atf');
  }
}
