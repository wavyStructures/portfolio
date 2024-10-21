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

  // constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // @HostListener('window:scroll', [])
  // onWindowScroll(): void {
  //   this.debounceCheckProjectsInView();
  // }

  // // Vanilla debounce function
  // debounce(func: Function, wait: number) {
  //   let timeout: any;
  //   return function (...args: any[]) {
  //     const later = () => {
  //       clearTimeout(timeout);
  //       func(...args);
  //     };
  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);
  //   };
  // }

  // // Debounce the check to run every 100 milliseconds after scrolling has stopped
  // debounceCheckProjectsInView = this.debounce(() => {
  //   this.checkProjectsInView();
  // }, 100);

  // // Method to check if project elements are in view
  // checkProjectsInView(): void {
  //   const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  //   const projectElements = document.querySelectorAll(
  //     '.single-project-wrapper'
  //   );

  //   projectElements.forEach((projectElement: Element) => {
  //     const elementPosition =
  //       projectElement.getBoundingClientRect().top + window.scrollY;

  //     // Check if the project element is in view
  //     if (
  //       scrollPosition > elementPosition - window.innerHeight &&
  //       scrollPosition < elementPosition + projectElement.clientHeight
  //     ) {
  //       const alreadyAnimated =
  //         projectElement.getAttribute('data-aos-animated');

  //       // Trigger animation only if it hasn't been animated already
  //       if (!alreadyAnimated) {
  //         AOS.refresh(); // Trigger the animation refresh when in view
  //         projectElement.setAttribute('data-aos-animated', 'true'); // Mark as animated
  //       }
  //     }
  //   });
  // }

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
    // if (isPlatformBrowser(this.platformId)) {
    AOS.init({
      offset: 0,
      duration: 1000,
      delay: 200,
      easing: 'ease-in-sine',
      once: true,
    });
    // }
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
