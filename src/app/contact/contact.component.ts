import { Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('250ms', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('250ms', style({opacity: 0, transform: 'translate(0, -20px)'}))
      ]),
    ])
  ]
})
export class ContactComponent implements OnInit {
  emailIsSent: boolean = false;
  public contactForm = new FormGroup(
    {
      nameField: new FormControl('', [Validators.required, Validators.minLength(2)]),
      emailField: new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      messageField: new FormControl('', [Validators.required, Validators.minLength(10)]),
      checkBox: new FormControl(false, [Validators.requiredTrue])
    }
  );


  constructor(public home: HomeComponent) {
    this.contactForm.valueChanges.subscribe(console.log);
  }


  ngOnInit(): void {
  }


 /**
  * Creates a form group with the input values ​​of the contact form and sends it to the backend.
  */
  sendMail() {
    let formData = new FormData();
    formData.append('name', this.contactForm.value.nameField || '');
    formData.append('email', this.contactForm.value.emailField || '');
    formData.append('message', this.contactForm.value.messageField || '');

    //senden
    fetch("https://jacob-hengsbach.com/send_mail/send_mail.php",
      {
        method: 'POST',
        body: formData
      }
    )
    this.showConfirmation();
    this.clearInputFields();
  }


  /**
   * Clears the inputfields after submitting.
   */
  clearInputFields() {    
    this.contactForm.reset();    
  }


  /**
   * Sets the variable that states whether an email has been sent to true for 6 seconds. This will render the confirmation template.
   */
  showConfirmation() {
    this.emailIsSent = true;

    setTimeout(() => {
      this.emailIsSent = false;
    }, 6000);
  }
}
