import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit {

  contactForm: any;
  allUserist: any = [];

  constructor() {

  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.contactForm = new FormGroup({
      full_name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      comment: new FormControl('')

    })
  }

  submitForm(): void {
    this.allUserist.push({
      name: this.contactForm.value.full_name,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone,
      comment: this.contactForm.value.comment
    });

    console.log('All Userist: ', this.allUserist);
  }
  deleteRecord(email: string): void {
    this.allUserist = this.allUserist.filter((item: any) => {
      return item.email != email;
    });
  }
}
