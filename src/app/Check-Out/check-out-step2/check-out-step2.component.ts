import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { HttpClient } from "@angular/common/http";
import { PlaceOrder } from "src/app/Models/placeOrder";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "app-check-out-step2",
  templateUrl: "./check-out-step2.component.html",
  styleUrls: ["./check-out-step2.component.css"]
})
export class CheckOutStep2Component implements OnInit {
  @Input() t: any;
  @Input() placeOrderObj: PlaceOrder;

  addressDetails: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: Router
  ) {}

  ngOnInit() {
    this.formInit();
    this.getCurrenLocation();
  }

  // getting user current location
  getCurrenLocation() {
    this.http
      .get<any>("https://geoip-db.com/json/")
      .subscribe(data => this.setCurrentAddress(data));
  }

  // set current user location
  setCurrentAddress(response) {
    this.placeOrderObj.city = response.city;
    this.placeOrderObj.state = response.state;
    this.placeOrderObj.address = response.city;
    this.placeOrderObj.pinCode = response.postal;
    setTimeout(() => {
      this.onSubmit();
    }, 100);
  }

  // form init
  formInit() {
    this.addressDetails = this.formBuilder.group({
      address: ["", Validators.required],
      pinCode: ["", [Validators.required]],
      city: ["", [Validators.required]],
      state: ["", [Validators.required]]
    });
  }
  // submmit form
  onSubmit() {
    if (this.addressDetails.invalid) {
      if (
        this.placeOrderObj.cartItem != undefined ||
        this.placeOrderObj.cartItem.length > 0
      ) {
        this.placeOrderObj.activeSteps.stepThree = false;
        this.placeOrderObj.activeSteps.finalStep = false;
      } else {
        this.route.navigate(["/home"]);
      }
    } else {
      this.placeOrderObj.activeSteps.stepThree = true;
      this.placeOrderObj.activeSteps.finalStep = true;
    }
  }
}
