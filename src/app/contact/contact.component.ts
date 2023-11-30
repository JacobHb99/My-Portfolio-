import { Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm = new FormGroup(
    {
      nameField: new FormControl('', [Validators.required, Validators.minLength(2)]),
      emailField: new FormControl('', [Validators.required, Validators.email]),
      messageField: new FormControl('', [Validators.required, Validators.minLength(10)]),
      checkBox: new FormControl(false, [Validators.requiredTrue])
    }
  );


  constructor(public home: HomeComponent) {
    this.contactForm.valueChanges.subscribe(console.log);

  }


  ngOnInit(): void {
    console.log('form', this.contactForm.get('nameField')?.value);

  }

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

    console.log('email gesendet after');
  }


}
