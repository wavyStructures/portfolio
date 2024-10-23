import {
  Component,
  Input,
  OnInit,
  HostListener,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import AOS from 'aos';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Project } from '../../../interfaces/project.interface';

@Component({
  selector: 'app-project-single',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project-single.component.html',
  styleUrl: './project-single.component.scss',
})
export class ProjectSingleComponent
  implements OnInit, AfterViewInit, AfterViewChecked
{
  largeWindow: boolean = false;

  ngOnInit(): void {
    this.getWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const prevLargeWindow = this.largeWindow; // Store the previous window size state
    this.getWindowSize(); // Update `largeWindow`

    // Only refresh AOS if the window crosses the 800px threshold (to avoid unnecessary refreshes)
    if (prevLargeWindow !== this.largeWindow) {
      AOS.refresh();
    }
  }

  private getWindowSize(): void {
    const windowWidth = window.innerWidth;
    this.largeWindow = windowWidth >= 800; // Update based on the window width
  }

  ngAfterViewInit(): void {
    AOS.init({
      offset: 0,
      duration: 1000,
      delay: 200,
      easing: 'ease-in-sine',
      once: true,
    });
  }

  ngAfterViewChecked(): void {
    AOS.refresh();
  }

  isSelected = false;

  @Input() project!: Project;
  @Input() index!: number;
  @Input() totalProjects!: number;
  @Input() projectDescription: string = '';

  getLayoutClass() {
    return this.index % 2 === 0 ? 'even-layout' : 'odd-layout';
  }
}
