import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reference-single',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './reference-single.component.html',
  styleUrl: './reference-single.component.scss',
})
export class ReferenceSingleComponent {
  @Input() references!: {
    name: string;
    project: string;
    opinion: string;
  };
}
