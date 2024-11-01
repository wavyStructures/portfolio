import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  HostListener,
  AfterViewInit,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('showBorder') showBorder!: ElementRef;

  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = offset > 100;
  }

  constructor(
    private navigationService: NavigationService,
    private renderer: Renderer2
  ) {}

  navigateToSection(target: string) {
    this.navigationService.scrollToSection(target);
  }

  mobileWindow: boolean = false;
  observer!: IntersectionObserver;

  ngOnInit(): void {
    this.getWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.getWindowSize(); // Update `largeWindow`
  }

  private getWindowSize(): void {
    const windowWidth = window.innerWidth;
    this.mobileWindow = windowWidth <= 799;
  }

  ngAfterViewInit() {
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
      observer.observe(this.showBorder.nativeElement);
    }
  }

  showEffects() {
    setTimeout(() => {
      this.renderer.setStyle(this.showBorder.nativeElement, 'opacity', '1');
    }, 1000);
  }

  noEffects() {
    this.renderer.setStyle(this.showBorder.nativeElement, 'opacity', '0');
  }

  ngOnDestroy() {
    // Clean up observer and any event listeners if necessary
    if (this.observer) {
      this.observer.disconnect();
    }
    window.removeEventListener('resize', this.onResize.bind(this));
  }
}
