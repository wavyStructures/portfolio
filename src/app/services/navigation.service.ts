import { Injectable } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  // constructor(private router: Router, private route: ActivatedRoute) {}
  scrollToSection(sectionId: string, offset: number = 0) {
    const element = document.getElementById(sectionId);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}

  // async navigateToSection(target: string): Promise<void> {
  //   await this.router.navigate([], { fragment: target });
  //   const element = document.getElementById(target);

    //   if (element) {
    //     const headerOffset = 180; // Height of your fixed header
    //     const elementPosition =
    //       element.getBoundingClientRect().top + window.scrollY;

    //     // Calculate the position 100px above the target
    //     const targetPosition = elementPosition - headerOffset;
    //     console.log('Element Position:', elementPosition);
    //     console.log('targetPosition:', targetPosition);

    //     this.scrollToPosition(targetPosition, headerOffset);
    //   }
    // }

    // if (element) {
    //   const headerOffset = 80;

    //   // Get the margin bottom of the h2 element
    //   const h2Element = element.querySelector('h2');
    //   const marginAdjustment = h2Element
    //     ? parseInt(window.getComputedStyle(h2Element).marginBottom)
    //     : 0;

    //   const elementPosition =
    //     element.getBoundingClientRect().top + window.scrollY;

    //   const scrollToPosition =
    //     elementPosition - headerOffset - marginAdjustment;

    //   console.log('Element Position:', elementPosition);
    //   console.log('Scroll To Position:', scrollToPosition);

    //   window.scrollTo({
    //     top: scrollToPosition,
    //     behavior: 'smooth',
    //   });
    // }

    // scrollToPosition(elementPosition: number) {
    //   window.scrollTo({
    //     top: elementPosition,
    //     behavior: 'smooth',
    //   });
    // }

    // async navigateToSection(target: string): Promise<void> {
    //   await this.router.navigate([], { fragment: target });
    //   const element = document.getElementById(target);
    //   if (element) {
    //     const headerOffset = 80;
    //     const elementPosition =
    //       element.getBoundingClientRect().top + window.scrollY;
    //     this.scrollToPosition(elementPosition, headerOffset);
    //   }
    // }

    // scrollToPosition(elementPosition: number, headerOffset: number) {
    //   const offsetPosition = elementPosition - headerOffset;
    //   window.scrollTo({
    //     top: offsetPosition,
    //     behavior: 'smooth',
    //   });
    // }
