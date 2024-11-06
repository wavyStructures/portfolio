import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private navStateSubject = new BehaviorSubject<boolean>(false); // false means closed, true means open
  navState$ = this.navStateSubject.asObservable(); // Observable to subscribe to the navigation state

  constructor() {}

  scrollToSection(sectionId: string, offset: number = 0) {
    const element = document.getElementById(sectionId);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  // Method to toggle navigation state (open/closed)
  toggleNavState(): void {
    this.navStateSubject.next(!this.navStateSubject.value); // Toggle state between true and false
  }

  // Method to close the navigation (set state to false)
  closeNavState(): void {
    this.navStateSubject.next(false); // Set the state to closed
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
// }
