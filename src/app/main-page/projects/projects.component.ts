import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsiveService } from '../../responsive-services/responsive.service';
import { Subscription } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { Project } from '../../interfaces/project.interface';
import { ProjectSingleComponent } from './project-single/project-single.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    TranslateModule,
    AboutMeComponent,
    ProjectSingleComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      img: './../../../assets/img/projects/join.jpg',
      title: 'Join',
      stack: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'join-text',
      github: 'https://github.com',
      demo: 'https://join.developer-anja-schwab.de',
    },
    {
      img: './../../../assets/img/projects/EPL.jpg',
      title: 'El Pollo Loco',
      stack: 'JavaScript | HTML | CSS',
      description: 'epl-text',
      github: 'https://github.com',
      demo: 'https://EPL.developer-anja-schwab.de',
    },
    {
      img: './../../../assets/img/projects/EPL.jpg',
      title: 'Pokedex',
      stack: 'JavaScript | HTML | CSS | Api',
      description: 'pokedex-text',
      github: 'https://github.com',
      demo: 'https://pokedex.developer-anja-schwab.de/',
    },
  ];
}
