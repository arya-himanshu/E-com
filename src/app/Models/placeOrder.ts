import { ActiveWizardStep } from "./activeWizardStep";
import { Cart } from "./cart";

export class PlaceOrder {
  name: string;
  email: string;
  mobile: string;
  address: string;
  pinCode: string;
  city: string;
  state: string;
  paymentOption: string;
  activeSteps: ActiveWizardStep;
  cartItem: Array<Cart>;
}
