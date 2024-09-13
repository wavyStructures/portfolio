import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ResponsiveService } from '../../responsive-services/responsive.service';
import { Subscription } from 'rxjs';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})
export class ContactformComponent {
  http = inject(HttpClient);

  checkboxState: boolean = false;
  mailTest = false;

  contactData = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  post = {
    endPoint: 'http://localhost/send-email.php',
    // endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
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
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log(this.contactData);
      ngForm.resetForm();
      // this.emptyForm();
    }
  }

  // emptyForm() {
  //   this.contactData.firstName = '';
  //   this.contactData.lastName = '';
  //   this.contactData.email = '';
  //   this.contactData.message = '';
  // }
}
