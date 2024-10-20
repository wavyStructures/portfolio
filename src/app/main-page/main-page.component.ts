import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavigationStateService } from './../../app/services/navigation-state.service';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferencesComponent } from './references/references.component';
import { ContactformComponent } from './contactform/contactform.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    AboveTheFoldComponent,
    AboutMeComponent,
    MySkillsComponent,
    ProjectsComponent,
    ReferencesComponent,
    ContactformComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  isNavActive: boolean = false; // Add a variable to track nav state

  constructor(
    private navigationStateService: NavigationStateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Subscribe to the navigation state from the service
    this.navigationStateService.navState$.subscribe((isOpen) => {
      this.isNavActive = isOpen;
    });
    // Listen for fragment changes (useful when URL has # fragment)
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.scrollToFragment(fragment);
      }
    });
  }

  private scrollToFragment(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      const headerOffset = 120; // Adjust this to match your fixed header height
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }
}
