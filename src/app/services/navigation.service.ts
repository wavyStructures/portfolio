import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router, private route: ActivatedRoute) {}

  // navigateToSection(target: string): void {
  //   const mainPageUrl = '/';

  //   this.router.navigate([mainPageUrl], { fragment: target }).then(() => {
  //     setTimeout(() => this.scrollToSection(target), 0);
  //   });
  // }
  navigateToSection(target: string): void {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  // navigateToSection(target: string): void {
  //   const currentUrl = this.router.url.split('#')[0];
  //   const mainPageUrl = '/';

  //   if (currentUrl === mainPageUrl) {
  //     // Use timeout to ensure the DOM updates before scrolling
  //     setTimeout(() => this.scrollToSection(target), 0);
  //   } else {
  //     this.router.navigate([mainPageUrl], { fragment: target }).then(() => {
  //       setTimeout(() => this.scrollToSection(target), 0);
  //     });
  //   }
  // }
  // navigateToSection(target: string): void {
  //   const currentUrl = this.router.url.split('#')[0]; // Get current route path without fragment
  //   const mainPageUrl = '/'; // Define the main page route

  //   if (currentUrl === mainPageUrl) {
  //     // If already on the main page, just scroll to the section
  //     this.scrollToSection(target);
  //   } else {
  //     // Navigate to the main page, then scroll to the section after routing
  //     this.router.navigate([mainPageUrl], { fragment: target }).then(() => {
  //       this.scrollToSection(target);
  //     });
  //   }
  // }

  // private scrollToSection(target: string): void {
  //   const element = document.getElementById(target);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }

  scrollToSection(target: string): void {
    const element = document.getElementById(target);
    if (element) {
      const headerOffset = 120; // Adjust this to match your header's height
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }
}
