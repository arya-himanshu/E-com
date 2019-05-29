import { Component, Input, OnInit } from "@angular/core";

import { Product } from "src/app/Models/product";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  @Input() products: Array<Product>;
  constructor(private productService: ProductService) {}

  ngOnInit() {}

  addToCart(product, path) {
    this.productService.addProductToCart(product, path);
  }
}
