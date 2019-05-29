import { Component, Input, OnInit } from "@angular/core";

import { Cart } from "src/app/Models/cart";

@Component({
  selector: "app-cart-items",
  templateUrl: "./cart-items.component.html",
  styleUrls: ["./cart-items.component.css"]
})
export class CartItemsComponent implements OnInit {
  @Input() cartItem: Array<Cart> = new Array();
  constructor() {}

  ngOnInit() {}
}
