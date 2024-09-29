import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // You can modify this logic as per your needs
    const offset = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = offset > 100; // Change 100 to the value when you want the arrow to move
  }

  constructor(private navigationService: NavigationService) {}

  navigateToSection(target: string) {
    this.navigationService.navigateToSection(target);
  }
}
