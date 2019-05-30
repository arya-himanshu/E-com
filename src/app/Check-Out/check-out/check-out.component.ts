import { Component, OnInit } from "@angular/core";

import { ActiveWizardStep } from "src/app/Models/activeWizardStep";
import { PlaceOrder } from "src/app/Models/placeOrder";
import { Router } from "@angular/router";

@Component({
  selector: "app-check-out",
  templateUrl: "./check-out.component.html",
  styleUrls: ["./check-out.component.css"]
})
export class CheckOutComponent implements OnInit {
  placeOrderObj: PlaceOrder;
  constructor(private route: Router) {}

  ngOnInit() {
    // init PlaceOrder obj
    this.placeOrderObj = new PlaceOrder();
    this.placeOrderObj.activeSteps = new ActiveWizardStep();
    this.placeOrderObj.cartItem = new Array();
    this.placeOrderObj.cartItem = JSON.parse(localStorage.getItem("cart"));
    if (
      this.placeOrderObj.cartItem == undefined ||
      this.placeOrderObj.cartItem.length <= 0
    ) {
      this.route.navigate(["/home"]);
    }
  }
}
