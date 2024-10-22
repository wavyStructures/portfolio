import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router, private route: ActivatedRoute) {}

  // navigateToSection(target: string): void {

  //       element.scrollIntoView({ behavior: 'smooth' });

  navigateToSection(target: string): void {
    setTimeout(() => {
      const element = document.getElementById(target);
      if (element) {
        const headerOffset = 80;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        this.scrollToPosition(elementPosition, headerOffset);
      }
    }, 50);
  }

  scrollToPosition(elementPosition: number, headerOffset: number) {
    const offsetPosition = elementPosition - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }

  // scrollToSection(target: string): void {
  //   const element = document.getElementById(target);
  //   if (element) {
  //     const headerOffset = 120; // Adjust this to match your header's height
  //     const elementPosition =
  //       element.getBoundingClientRect().top + window.pageYOffset;
  //     const offsetPosition = elementPosition - headerOffset;

  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: 'smooth',
  //     });
  //   }
  // }
}
