import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './../shared/footer/footer.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule, FooterComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {}
