import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BackendService } from "../services/backend.service";

@Component({
  selector: "app-enquiry",
  templateUrl: "./enquiry.component.html",
  styleUrl: "./enquiry.component.scss",
})
export class EnquiryComponent {
  public classes = ["Class 1", "Class 2"];
  public errorMessage = '';
  public successMessage = '';
  public loading = false;
  public _backendService: BackendService;
  constructor() {
    this._backendService = new BackendService();
  }
  public enquiryForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    subject: new FormControl("", [Validators.required]),
    class: new FormControl(""),
    contact: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
  });

  async submit() {
    const fields = Object.keys(this.enquiryForm.controls);
    const invalidFields = fields.filter(field => this.enquiryForm.get(field)?.invalid);
    this.errorMessage = 'These fields are invalid ' + invalidFields.join(',');
    if (!this.enquiryForm.valid) return;
    this.errorMessage = '';
    this.loading = true;
    await this._backendService.saveDetails(this.enquiryForm.value);
    this.loading = false;
    this.successMessage = 'Your details have been submitted successfully. We will reach out to you shortly.';
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
