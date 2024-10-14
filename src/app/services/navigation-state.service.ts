import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationStateService {
  // BehaviorSubject to hold the state of the navigation menu (open/closed)
  private navStateSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  // Observable to expose the nav state to other components
  navState$: Observable<boolean> = this.navStateSubject.asObservable();

  constructor() {}

  // Method to update the navigation state
  updateNavState(isOpen: boolean): void {
    this.navStateSubject.next(isOpen);
  }

  // Optional: Method to toggle the navigation state
  toggleNavState(): void {
    this.navStateSubject.next(!this.navStateSubject.value);
  }
}
