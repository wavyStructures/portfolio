import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import AOS from 'aos';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Project } from '../../../interfaces/project.interface';

@Component({
  selector: 'app-project-single',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project-single.component.html',
  styleUrl: './project-single.component.scss',
})
export class ProjectSingleComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild('projectImage') projectImage!: ElementRef;
  @ViewChild('textContent') textContent!: ElementRef;

  ngAfterViewInit(): void {
    AOS.init();
  }

  ngAfterViewChecked(): void {
    AOS.refresh();
  }

  isSelected = false;

  @Input() project!: Project;
  @Input() index!: number;

  getLayoutClass() {
    return this.index % 2 === 0 ? 'even-layout' : 'odd-layout';
  }
}
