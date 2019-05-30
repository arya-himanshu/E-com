import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";

import { PlaceOrder } from "src/app/Models/placeOrder";
import { ProductService } from "src/app/Product-Container/product.service";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-check-out-final-step",
  templateUrl: "./check-out-final-step.component.html",
  styleUrls: ["./check-out-final-step.component.css"]
})
export class CheckOutFinalStepComponent implements OnInit {
  @Input() t: any;
  @Input() placeOrderObj: PlaceOrder;
  paymentMethod: FormGroup;
  total: number;
  totalQuantity: number;
  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    config: NgbModalConfig,
    private productService: ProductService
  ) {
    config.backdrop = "static";
    config.keyboard = false;
  }

  ngOnInit() {
    this.total = 0;
    this.totalQuantity = 0;
    this.paymentMethod = this.formBuilder.group({
      paymentOption: ["", Validators.required]
    });
    if (
      this.placeOrderObj.cartItem != undefined &&
      this.placeOrderObj.cartItem.length > 0
    ) {
      for (let c of this.placeOrderObj.cartItem) {
        this.total = this.total + c.total;
        this.totalQuantity = this.totalQuantity + c.quantity;
      }
    }
  }

  // confirm order to open modal
  confirmOrder(content) {
    localStorage.clear();
    this.productService.getLocalStorageCartData();
    this.modalService.open(content, { size: "lg" });
  }
}
