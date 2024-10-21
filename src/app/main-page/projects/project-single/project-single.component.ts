import {
  Component,
  Input,
  OnInit,
  HostListener,
  PLATFORM_ID,
  Inject,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import AOS from 'aos';
import { CommonModule, isPlatformBrowser } from '@angular/common';
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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.getWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.getWindowSize();
    AOS.refresh();
  }

  private getWindowSize(): void {
    const windowWidth = window.innerWidth;
    this.largeWindow = windowWidth >= 800;
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        offset: 300,
        duration: 500,
        delay: 200,
        easing: 'ease-in-sine',
      });
    }
  }

  // ngAfterViewInit(): void {
  //   AOS.init();
  // }

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
