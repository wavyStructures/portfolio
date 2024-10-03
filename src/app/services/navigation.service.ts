import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private router: Router) {}

  navigateToSection(target: string): void {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }



  navigateToTop(): void {
    this.router.navigate([''], { fragment: 'atf' });
  }
}
