import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements OnInit {
  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // You can modify this logic as per your needs
    const offset = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = offset > 100; // Change 100 to the value when you want the arrow to move
  }

  constructor() {}

  ngOnInit() {}
}
