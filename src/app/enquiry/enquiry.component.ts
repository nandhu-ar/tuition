import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EmailService } from "../services/email.service";

@Component({
  selector: "app-enquiry",
  templateUrl: "./enquiry.component.html",
  styleUrl: "./enquiry.component.scss",
})
export class EnquiryComponent {
  public classes = ["Class 1", "Class 2"];
  public enquiryForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    subject: new FormControl("", [Validators.required]),
    class: new FormControl(""),
    contact: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
  });

  submit() {
    console.log(this.enquiryForm.value);
    if (!this.enquiryForm.valid) return;
    new EmailService().sendEmail(this.enquiryForm.value);
  }

  get classDropDown() {
    return this.enquiryForm.controls.class.value || "Class";
  }
  resetForm() {
    this.enquiryForm.reset();
  }

  selectClass(_class: string) {
    this.enquiryForm.controls.class.setValue(_class);
  }
}
