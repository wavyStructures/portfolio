import { Component } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
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
      github: 'https://github.com/wavyStructures/anjaschwab-join',
      demo: 'https://join.developer-anja-schwab.de',
    },
    {
      img: './../../../assets/img/projects/EPL.jpg',
      title: 'El Pollo Loco',
      stack: 'JavaScript | HTML | CSS',
      description: 'epl-text',
      github: 'https://github.com/wavyStructures/El-Pollo-Loco',
      demo: 'https://epl.developer-anja-schwab.de',
    },
  ];

  // largeWindow: boolean = false;

  // constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // ngOnInit(): void {
  //   this.getWindowSize();
  // }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event): void {
  //   this.getWindowSize();
  // }

  // private getWindowSize(): void {
  //   const windowWidth = window.innerWidth;
  //   this.largeWindow = windowWidth >= 800;
  // }

  // ngAfterViewInit(): void {
  //   if (isPlatformBrowser(this.platformId)) {
  //     AOS.init({
  //       offset: 300,
  //       duration: 400,
  //       delay: 200,
  //     });
  //   }
  // }
}
