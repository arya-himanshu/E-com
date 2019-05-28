import { Component, OnInit } from "@angular/core";

import { ProductService } from "src/app/Product-Container/product.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getLocalStorageCartData()
      .subscribe(data => console.log(data));
  }
}
