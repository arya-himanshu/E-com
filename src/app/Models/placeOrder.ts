import { ActiveWizardStep } from "./activeWizardStep";
import { Cart } from "./cart";

export class PlaceOrder {
  name: string;
  email: string;
  mobile: string;
  addess: string;
  pincode: string;
  city: string;
  state: string;
  cartItem: Array<Cart>;
  paymentOption: string;
  activeSteps: ActiveWizardStep;
}
