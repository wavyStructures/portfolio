import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationStateService {
  // BehaviorSubject to hold the state of the navigation menu (open/closed)
  private navStateSubject = new BehaviorSubject<boolean>(false);

  // Observable to expose the nav state to other components
  navState$ = this.navStateSubject.asObservable();

  // Method to update the navigation state
  updateNavState(isOpen: boolean): void {
    this.navStateSubject.next(isOpen);
  }

  toggleNavState(): void {
    this.navStateSubject.next(!this.navStateSubject.value);
  }

  closeNavState(): void {
    this.navStateSubject.next(false); // Set state to closed
  }
}
