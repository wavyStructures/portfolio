import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { NavigationStateService } from './../services/navigation-state.service'; // Import the service
import { Subscription } from 'rxjs';

import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './../shared/footer/footer.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule, CommonModule, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent implements OnInit, OnDestroy {
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
