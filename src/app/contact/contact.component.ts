import { Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';



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
    //console.log('form', this.contactForm.get('nameField').value);
  }


  ngOnInit(): void {
    
  }

  sendMail() {
/*     console.log(this.myForm);
    let nameField = this.nameInput.nativeElement;
    let emailField = this.emailInput.nativeElement;
    let messageField = this.messageInput.nativeElement;
    let senMailBtn = this.sendMailBtn.nativeElement;


    let formData = new FormData();
    formData.append('name', this.contactForm.get('nameField').value);
    formData.append('message', this.contactForm.get('messageInput').value);
    formData.append('email', this.contactForm.get('emailInput').value);
 
    console.log(formData); 
  
    //senden
     fetch("https://jacob-hengsbach.com/send_mail/send_mail.php",
      {
        method: 'POST',
        body: formData
      }
    ) 

*/ 
    
  }


}
