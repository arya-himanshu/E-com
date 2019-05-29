import { Component, Input, OnInit } from "@angular/core";

import { Cart } from "src/app/Models/cart";

@Component({
  selector: "app-cart-items",
  templateUrl: "./cart-items.component.html",
  styleUrls: ["./cart-items.component.css"]
})
export class CartItemsComponent implements OnInit {
  @Input() cartItem: Array<Cart> = new Array();
  total: number;
  totalQuantity: number;
  constructor() {}

  ngOnInit() {
    this.total = 0;
    this.totalQuantity = 0;
    if (this.cartItem != undefined && this.cartItem.length > 0) {
      for (let c of this.cartItem) {
        this.total = this.total + c.total;
        this.totalQuantity = this.totalQuantity + c.quantity;
      }
    }
  }
}
