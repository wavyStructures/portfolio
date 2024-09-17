import { Component } from '@angular/core';
import { ResponsiveService } from '../../responsive-services/responsive.service';
import { Subscription } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Reference } from '../../interfaces/reference.interface';
import { ReferenceSingleComponent } from "./reference-single/reference-single.component";

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [RouterLink, RouterOutlet, TranslateModule, ReferenceSingleComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  references: Reference[] = [
    {
      name: 'Stefanie V.',
      project: 'PEOPLE_STATUS_1',
      opinion: 'REFERENCE_1',
    },
    {
      name: 'Sebastian S.',
      project: 'PEOPLE_STATUS_2',
      opinion: 'REFERENCE_2',
    },
    {
      name: 'Mario W.',
      project: 'PEOPLE_STATUS_3',
      opinion: 'REFERENCE_3',
    },
  ];
}
