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

  ngOnInit() {
    this.route.fragment.subscribe((fragment: any) => {
      this.scrollToSection(fragment);
    });
  }

  scrollToSection(section: string | null) {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  navigateToSection(target: string) {
    const fullPageRoutes = ['imprint', 'privacy-policy'];

    if (fullPageRoutes.includes(target)) {
      this.router.navigate([`/${target}`]).then(() => {
        this.closeNav.emit();
      });
    } else {
      this.goToLink(target);
    }
  }

  goToLink(target: string) {
    let fixedHeaderHeight: number;

    if (target === 'projects') {
      fixedHeaderHeight = 98;
    } else {
      fixedHeaderHeight = 120;
    }

    this.navigationService.scrollToSection(target, fixedHeaderHeight);

    this.closeNav.emit();
  }

  closeNavMenu() {
    this.closeNav.emit();
  }
}
