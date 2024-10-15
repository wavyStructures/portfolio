import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterOutlet,
    TranslateModule,
  ],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})
export class ContactformComponent {
  http = inject(HttpClient);
  @Input() isInsideNavigation: boolean = false;
  @Input() isInImprint: boolean = false;

  checkboxState: boolean = false;
  showMessage = false;

  mailTest = true;

  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) {}

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  post = {
    // endPoint: 'http://localhost/send-email.php',

    endPoint: 'https://anja_schwab@gmx.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    console.log('Form Valid:', ngForm.valid);
    console.log('Form Submitted:', ngForm.submitted);

    console.log('Submit clicked');

    ngForm.form.markAllAsTouched();

    if (ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.form.valid && this.mailTest) {
      console.log(this.contactData);
      ngForm.resetForm();
    } else {
      console.warn('form is not valid');
    }
  }

  onCheckboxChange() {}

  navigateToTop(): void {
    this.navigationService.navigateToSection('atf');
  }
}
