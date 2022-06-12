import { Component, OnInit } from '@angular/core';
import { ColorTypeEnum } from 'src/enums/color-type.enum';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  ColorTypeEnum = ColorTypeEnum;

  contactForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phone': new FormControl('', Validators.required),
      'message': new FormControl('', Validators.required)
    });
  }


  // TODO: dodać działający przycisk do formularza aby wysyłało poprawnie
  onSubmit(): void {
    console.log(this.contactForm);
    
  }

}