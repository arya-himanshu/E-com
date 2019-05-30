import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { PlaceOrder } from "src/app/Models/placeOrder";

@Component({
  selector: "app-check-out-final-step",
  templateUrl: "./check-out-final-step.component.html",
  styleUrls: ["./check-out-final-step.component.css"]
})
export class CheckOutFinalStepComponent implements OnInit {
  @Input() t: any;
  @Input() placeOrderObj: PlaceOrder;
  paymentMethod: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.paymentMethod = this.formBuilder.group({
      paymentOption: ["", Validators.required]
    });
  }

  onSubmit() {
    console.log(this.paymentMethod);
    if (this.paymentMethod.invalid) {
      this.placeOrderObj.activeSteps.stepOne = true;
    } else {
      this.placeOrderObj.activeSteps.stepOne = false;
    }
  }
}
