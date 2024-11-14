import { HttpClient } from '@angular/common/http';
import { Component, Input, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    TranslateModule,
  ],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})
export class ContactformComponent implements OnInit {
  http = inject(HttpClient);
  @Input() isInsideNavigation: boolean = false;
  @Input() isInImprint: boolean = false;

  checkboxState: boolean = false;
  showMessage: boolean = false;
  startHideMessage: boolean = false;
  mailTest = false;

  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) {}

  ngOnInit() {
    this.showMessage = false;
  }

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  post = {
    endPoint: 'https://developer-anja-schwab.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(form: NgForm) {
    form.form.markAllAsTouched();

    if (form.form.valid && !this.mailTest && this.checkboxState) {
      // console.log('checkboxState in submit onSbmit', this.checkboxState);

      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response: any) => {
            this.showMessage = true;
            this.startHideMessage = false;

            setTimeout(() => {
              this.startHideMessage = true;

              setTimeout(() => {
                this.showMessage = false;
                this.startHideMessage = false;
              }, 1500);
            }, 6000);

            form.resetForm();
          },
          error: (error: any) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (form.valid && this.mailTest) {
      // console.log(this.contactData);
      form.resetForm();
    } else {
      console.warn('form is not valid');
    }
  }

  navigateToTop(): void {
    this.navigationService.scrollToSection('atf');
  }
}
