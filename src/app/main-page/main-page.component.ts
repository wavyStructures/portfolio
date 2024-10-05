import { Component, OnInit } from '@angular/core';
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

  constructor(private navigationStateService: NavigationStateService) {}

  ngOnInit(): void {
    // Subscribe to the navigation state from the service
    this.navigationStateService.navState$.subscribe((isOpen) => {
      this.isNavActive = isOpen;
    });
  }
}
