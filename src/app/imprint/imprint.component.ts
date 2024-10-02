import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { NavigationStateService } from '../navigation-state.service'; // Import the service
import { Subscription } from 'rxjs';

import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './../shared/footer/footer.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule, CommonModule, FooterComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent implements OnInit, OnDestroy {
  // @Input() isNavActive: boolean = false; // Accept isActive state
  isNavActive: boolean = false;
  navStateSub: Subscription | undefined;

  constructor(private navigationStateService: NavigationStateService) {}

  ngOnInit() {
    this.navStateSub = this.navigationStateService.navState$.subscribe(
      (isActive: boolean) => {
        this.isNavActive = isActive;
      }
    );
  }

  ngOnDestroy() {
    if (this.navStateSub) {
      this.navStateSub.unsubscribe();
    }
  }
}
