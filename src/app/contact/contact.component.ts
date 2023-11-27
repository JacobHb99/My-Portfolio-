import { Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public contactForm = new FormGroup(
    {
      nameField: new FormControl('', [Validators.required, Validators.minLength(2)]),
      emailField: new FormControl('', [Validators.required, Validators.email]),
      messageField: new FormControl('', [Validators.required, Validators.minLength(10)]),
      checkBox: new FormControl(false)
    }
  );

  constructor(public home: HomeComponent) {
  }


  sendMail() {
/*     console.log(this.myForm);
    let nameField = this.nameInput.nativeElement;
    let emailField = this.emailInput.nativeElement;
    let messageField = this.messageInput.nativeElement;
    let senMailBtn = this.sendMailBtn.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    senMailBtn.disabled = true;


    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('email', emailField.value);
    formData.append('message', messageField.value);
    console.log(formData); */


    formData = [{
      name: this.contactForm.
    }]
    //senden
     fetch("https://jacob-hengsbach.com/send_mail/send_mail.php",
      {
        method: 'POST',
        body: 
      }
    ) 


    
  }


}
