import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResponsiveService } from '../../responsive-services/responsive.service';
import { Subscription } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [RouterLink, RouterOutlet, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {}
