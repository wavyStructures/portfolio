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
    }
  }

  toggleNavState(): void {
    this.navStateSubject.next(!this.navStateSubject.value); // Toggle state between true and false
  }

  closeNavState(): void {
    this.navStateSubject.next(false); // Set the state to closed
  }
}
