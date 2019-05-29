import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { CartComponent } from "./Cart-Container/cart/cart.component";
import { CartItemsComponent } from "./Cart-Container/cart-items/cart-items.component";
import { CheckOutComponent } from "./Check-Out/check-out/check-out.component";
import { CheckOutFinalStepComponent } from "./Check-Out/check-out-final-step/check-out-final-step.component";
import { CheckOutStep1Component } from "./Check-Out/check-out-step1/check-out-step1.component";
import { CheckOutStep2Component } from "./Check-Out/check-out-step2/check-out-step2.component";
import { HomeComponent } from "./Home-Container/home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./Nav-Container/navbar/navbar.component";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ProductComponent } from "./Product-Container/product/product.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductComponent,
    CartComponent,
    CartItemsComponent,
    CheckOutComponent,
    CheckOutStep1Component,
    CheckOutStep2Component,
    CheckOutFinalStepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
