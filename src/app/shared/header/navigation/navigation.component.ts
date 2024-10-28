import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterModule,
  ActivatedRoute,
} from '@angular/router';
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
    private route: ActivatedRoute,
    private translate: TranslateService,
    private navigationService: NavigationService
  ) {}

  navigateToSection(target: string) {
    this.goToLink(target);
  }

  goToLink(target: string) {
    let fixedHeaderHeight: number;

    if (target === 'projects') {
      fixedHeaderHeight = 98;
    } else {
      fixedHeaderHeight = 120;
    }
    this.toggleAboveTheFold(target);
    this.navigationService.scrollToSection(target, fixedHeaderHeight);
    this.closeNav.emit();
  }

  toggleAboveTheFold(target: string) {
    const atfElement = document.getElementById('atf'); // Ensure 'atf' is the correct ID
    if (atfElement) {
      if (target === 'skills' || target === 'about' || target === 'projects') {
        atfElement.classList.remove('d-none'); // Remove the class
      } else {
        atfElement.classList.add('d-none'); // Optionally add it back for other targets
      }
    }
  }

  closeNavMenu() {
    this.closeNav.emit();
  }
}
