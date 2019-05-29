import { Component, OnInit } from "@angular/core";

import { ActiveWizardStep } from "src/app/Models/activeWizardStep";
import { PlaceOrder } from "src/app/Models/placeOrder";

@Component({
  selector: "app-check-out",
  templateUrl: "./check-out.component.html",
  styleUrls: ["./check-out.component.css"]
})
export class CheckOutComponent implements OnInit {
  placeOrderObj: PlaceOrder;
  constructor() {}

  ngOnInit() {
    this.placeOrderObj = new PlaceOrder();
    this.placeOrderObj.activeSteps = new ActiveWizardStep();
  }
}
