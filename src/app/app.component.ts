import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
// import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MainPageComponent,
    FooterComponent,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Anja Schwab';

  async ngOnInit() {
    const AOS = await import('aos');
    AOS.init();
  }
}
