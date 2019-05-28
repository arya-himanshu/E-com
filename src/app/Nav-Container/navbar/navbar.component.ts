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
  localStorageCart: Cart;

  ngOnInit() {
    this.localStorageCart = new Cart();
    this.localStorageCart.totalProduct = 0;
    this.productService
      .getLocalStorageCartData()
      .subscribe(data => this.getLocalStorageCart(data));
  }

  getLocalStorageCart(data) {
    this.localStorageCart = data;
  }
}
