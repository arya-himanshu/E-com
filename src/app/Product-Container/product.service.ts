import * as faker from "faker";

import { BehaviorSubject, Observable, Subject } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Cart } from "../Models/cart";
import { Injectable } from "@angular/core";
import { Product } from "../Models/product";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private router: Router, private httpService: HttpClient) {}
  private products = new BehaviorSubject<any>(0);
  private globalCart = new BehaviorSubject<any>(0);
  productsArray: Array<Product> = new Array();

  // This bit is generating the product data by unsing faker
  generateProductData(): Observable<Product> {
    // let productsArray: Array<Product> = new Array();
    // for (let i = 1; i <= 20; i++) {
    //   let productObj = new Product();
    //   productObj.id = i;
    //   productObj.isActive = true;
    //   productObj.price = faker.random.number();
    //   productObj.productImage =
    //     "../../../assets/images/" +
    //     this.productImages[this.getRandomInt(0, 7)] +
    //     ".jpeg";
    //   productObj.productName = faker.commerce.productName();
    //   productsArray.push(productObj);
    // }
    // this.products.next(productsArray);
    this.httpService.get("../../assets/product.json").subscribe(
      data => {
        this.productsArray = data as Array<Product>;
        this.products.next(this.productsArray);
      },

      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
    return this.products;
  }

  // This bit is for add product to cart
  addProductToCart(product: Product, path: string) {
    let localStorageCart: Array<Cart> = new Array();

    if (product != undefined) {
      if (localStorage.getItem("cart") != undefined) {
        localStorageCart = JSON.parse(localStorage.getItem("cart"));
        let cartObj = new Cart();
        for (let cr of localStorageCart) {
          if (cr.productId == product.id) {
            cr.quantity += 1;
            cr.total = cr.total + product.price;
            localStorage.setItem("cart", JSON.stringify(localStorageCart));
            this.navigateTo(path);
            return;
          }
        }
        this.setLocalStorage(localStorageCart, product);
        this.navigateTo(path);
      } else {
        this.setLocalStorage(localStorageCart, product);
        this.navigateTo(path);
      }
    }
    this.getLocalStorageCartData();
  }

  // navigation function
  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  // This Bit is for set localStorage data
  setLocalStorage(localStorageCart, product) {
    localStorageCart.push(this.setCart(product));
    localStorage.setItem("cart", JSON.stringify(localStorageCart));
  }

  // Commont function for set cart data
  setCart(product: Product) {
    let cartObj = new Cart();
    cartObj.productId = product.id;
    cartObj.price = product.price;
    cartObj.productImage = product.imageUrl;
    cartObj.productName = product.name;
    cartObj.quantity = 1;
    cartObj.total = product.price;
    return cartObj;
  }

  // this bit is for get localStorage cart data
  getLocalStorageCartData(): Observable<Cart> {
    let cart: Array<Cart> = new Array();

    if (
      localStorage.getItem("cart") != undefined &&
      localStorage.getItem("cart").length > 0
    ) {
      cart = JSON.parse(localStorage.getItem("cart"));
      this.globalCart.next(cart);
      return this.globalCart;
    } else {
      this.globalCart.next(cart);
      return this.globalCart;
    }
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
