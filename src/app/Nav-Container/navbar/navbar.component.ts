import { Component, OnInit } from "@angular/core";

import { Cart } from "src/app/Models/cart";
import { ProductService } from "src/app/Product-Container/product.service";
import { Subject } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private productService: ProductService) {}
  localStorageCart: Array<Cart> = new Array();
  ngOnInit() {
    this.getLocalStorageData();
  }
  getLocalStorageData() {
    this.productService
      .getLocalStorageCartData()
      .subscribe(data => this.getLocalStorageCart(data));
  }

  getLocalStorageCart(data) {
    if (data != undefined) {
      this.localStorageCart = data;
    } else {
      this.localStorageCart = [];
    }
  }
}
