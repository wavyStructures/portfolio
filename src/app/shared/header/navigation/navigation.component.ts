import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

import { ContactformComponent } from '../../../main-page/contactform/contactform.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [ContactformComponent, FooterComponent, RouterModule, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  @Input() isActive!: boolean; // Input from parent
  @Output() closeNav = new EventEmitter<void>(); // Event to notify parent
  constructor(
    // private viewportScroller: ViewportScroller,
    private router: Router
  ) {}

  navigateToSection(target: string): void {
    this.router.navigate([], { fragment: target }).then(() => {
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) {
          const headerOffset = 120;
          const elementSection =
            element.getBoundingClientRect().top + window.scrollY;
          this.scrollToSection(elementSection, headerOffset);
        }
      }, 50);
    });
  }

  scrollToSection(elementSection: number, headerOffset: number) {
    const offsetPosition = elementSection - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    this.closeMenu();
  }

  closeMenu() {
    this.closeNav.emit();
  }
}
