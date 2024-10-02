import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationStateService {
  updateNavState(arg0: boolean) {
    throw new Error('Method not implemented.');
  }
  navState$: any;

  constructor() { }
}
