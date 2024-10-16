import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Reference } from '../../interfaces/reference.interface';
import { ReferenceSingleComponent } from './reference-single/reference-single.component';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    TranslateModule,
    ReferenceSingleComponent,
  ],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // You can modify this logic as per your needs
    const offset = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = offset > 50; // Change 100 to the value when you want the arrow to move
  }

  references: Reference[] = [
    {
      name: 'Stefanie V.',
      project: 'PEOPLE_1',
      opinion: 'REFERENCE_1',
    },
    {
      name: 'Sebastian S.',
      project: 'PEOPLE_2',
      opinion: 'REFERENCE_2',
    },
    {
      name: 'Mario W.',
      project: 'PEOPLE_3',
      opinion: 'REFERENCE_3',
    },
  ];
}
