import { Component, OnInit } from "@angular/core";

import { Cart } from "src/app/Models/cart";
import { Subject } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor() {}
  localStorageCart: Cart;

  ngOnInit() {
    this.localStorageCart = new Cart();
    this.localStorageCart.totalProduct = 0;
    this.getLocalStorageCart();
  }

  getLocalStorageCart() {
    if (localStorage.getItem("cart") != undefined) {
      this.localStorageCart = JSON.parse(localStorage.getItem("cart"));
    }
  }
}
