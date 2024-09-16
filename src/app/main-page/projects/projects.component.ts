import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResponsiveService } from '../../responsive-services/responsive.service';
import { Subscription } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ProjectSingleComponent } from './project-single/project-single.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    TranslateModule,
    AboutMeComponent,
    ProjectSingleComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {}
