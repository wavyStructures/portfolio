import {
  Component,
  Input,
  OnInit,
  HostListener,
  AfterViewInit,
  AfterViewChecked,
  ElementRef,
  Renderer2,
  ViewChild,
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
  @ViewChild('projectImgDiv') projectImgDiv!: ElementRef;
  @ViewChild('showBorder') showBorder!: ElementRef;

  constructor(private renderer: Renderer2) {}

  largeWindow: boolean = false;
  mobileWindow: boolean = false;
  observer!: IntersectionObserver;

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
    this.mobileWindow = windowWidth <= 799;
  }

  ngAfterViewInit(): void {
    AOS.init({
      offset: 0,
      duration: 1000,
      delay: 200,
      easing: 'ease-in-sine',
      once: true,
    });

    if (this.mobileWindow) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.showEffects();
          } else {
            this.noEffects();
          }
        });
      });

      // Observe the target element
      observer.observe(this.projectImgDiv.nativeElement);
    }
  }

  showEffects() {
    setTimeout(() => {
      this.renderer.setStyle(this.showBorder.nativeElement, 'opacity', '1');
      this.renderer.setStyle(
        this.showBorder.nativeElement,
        'visibility',
        'visible'
      );
      this.renderer.setStyle(
        this.showBorder.nativeElement.querySelector('img'),
        'transform',
        'scale(1.5) rotate(-130deg)'
      );
    }, 1000);
  }

  noEffects() {
    this.renderer.setStyle(this.showBorder.nativeElement, 'opacity', '0');
    this.renderer.setStyle(
      this.showBorder.nativeElement,
      'visibility',
      'hidden'
    );
    this.renderer.setStyle(
      this.showBorder.nativeElement.querySelector('img'),
      'transform',
      'none'
    );
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

  ngOnDestroy() {
    // Clean up observer and any event listeners if necessary
    if (this.observer) {
      this.observer.disconnect();
    }
    window.removeEventListener('resize', this.onResize.bind(this));
  }
}
