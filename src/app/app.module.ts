import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./Home-Container/home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./Nav-Container/navbar/navbar.component";
import { NgModule } from "@angular/core";
import { ProductComponent } from "./Product-Container/product/product.component";
import { CartComponent } from './Cart-Container/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
