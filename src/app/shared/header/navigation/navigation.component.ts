import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavigationService } from '../../../services/navigation.service';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    FooterComponent,
    RouterModule,
    RouterLink,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  @Input() isActive!: boolean; // Input from parent
  @Output() closeNav = new EventEmitter<void>(); // Event to notify parent

  constructor(
    private router: Router,
    private translate: TranslateService,
    private navigationService: NavigationService
  ) {}

  navigateToSection(target: string): void {
    this.navigationService.navigateToSection(target); 
    this.closeNav.emit(); // Emit close event to parent
  }
}
