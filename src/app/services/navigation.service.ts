import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  scrollToSection(sectionId: string, offset: number = 0) {
    const element = document.getElementById(sectionId);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  // scrollToSection(sectionId: string, offset: number = 0): Promise<void> {
  //   return new Promise((resolve, reject) => {
  //     const element = document.getElementById(sectionId);

  //     if (element) {
  //       const elementPosition = element.getBoundingClientRect().top;
  //       const offsetPosition = elementPosition + window.scrollY - offset;

  //       window.scrollTo({
  //         top: offsetPosition,
  //         behavior: 'smooth',
  //       });

  //       // Listen for scroll completion (you can adjust this as needed)
  //       window.addEventListener('scroll', function onScroll() {
  //         // Resolve when scroll ends (you could also use scroll position or other indicators)
  //         resolve();
  //         window.removeEventListener('scroll', onScroll); // Cleanup listener
  //       });
  //     } else {
  //       reject(`Element with id ${sectionId} not found`);
  //     }
  //   });
  // }
}
