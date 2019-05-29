import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ActiveWizardStep } from "src/app/Models/activeWizardStep";
import { PlaceOrder } from "src/app/Models/placeOrder";

@Component({
  selector: "app-check-out-step1",
  templateUrl: "./check-out-step1.component.html",
  styleUrls: ["./check-out-step1.component.css"]
})
export class CheckOutStep1Component implements OnInit {
  @Input() t: any;
  @Input() placeOrderObj: PlaceOrder;
  personalDetails: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    console.log(this.placeOrderObj);

    this.personalDetails = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      mobile: ["", [Validators.required, Validators.minLength(10)]]
    });
  }
  onSubmit() {
    console.log(this.personalDetails);
    if (this.personalDetails.invalid) {
      this.placeOrderObj.activeSteps.stepOne = true;
    } else {
      this.placeOrderObj.activeSteps.stepOne = false;
    }
    console.log(this.placeOrderObj);
  }
}
