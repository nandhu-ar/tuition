import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrl: './enquiry.component.scss'
})
export class EnquiryComponent {
  public enquiryForm = new FormGroup({
    name: new FormControl(),
    subject: new FormControl()
  });

  submit() {
    

  }

  resetForm() {

  }
}
