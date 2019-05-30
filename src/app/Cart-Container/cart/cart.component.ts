import { Component, OnInit } from "@angular/core";

import { Cart } from "src/app/Models/cart";
import { ProductService } from "src/app/Product-Container/product.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  constructor(private productService: ProductService) {}
  cart: Array<Cart> = new Array();

  ngOnInit() {
    this.getLocalStorageCart();
  }

  // fetching data from localstorage
  getLocalStorageCart() {
    this.productService
      .getLocalStorageCartData()
      .subscribe(data => this.setResponse(data));
  }

  // set data of localStorage
  setResponse(response) {
    if (response != undefined && response.length > 0) {
      this.cart = response;
    }
  }
}
