import {
  Component,
  EventEmitter,
  Input,
  Output,
  HostBinding,
  HostListener,
} from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactformComponent } from '../../../main-page/contactform/contactform.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    ContactformComponent,
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
    // private viewportScroller: ViewportScroller,
    private router: Router
  ) {}

  navigateToSection(target: string): void {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.closeNav.emit(); // Emit close event
  }

  @HostBinding('class.state1') isState1 = false;
  @HostBinding('class.state2') isState2 = false;
  @HostBinding('class.state3') isState3 = false;

  @HostListener('mouseover', ['$event.target'])
  onMouseOver(target: HTMLElement) {
    if (target.classList.contains('nav-link')) {
      this.resetStates();
      this.isState1 = true; // Start with state1 (left corner)
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.resetStates();
  }

  private resetStates() {
    this.isState1 = false;
    this.isState2 = false;
    this.isState3 = false;
  }
}
