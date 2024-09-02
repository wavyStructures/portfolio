import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})
export class ContactformComponent {
  onSubmit() {
    console.log('funktioniert');
  }
}
