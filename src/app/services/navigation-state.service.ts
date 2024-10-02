import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationStateService {
  private navState = new BehaviorSubject<boolean>(false);
  navState$ = this.navState.asObservable();

  updateNavState(isActive: boolean) {
    this.navState.next(isActive);
  }
}
