#Note

Run server : ng serve --o .

Url : http://localhost:4200/home.

Screen Flows :

1.) Open url-> http://localhost:4200/home.
2.) Click on add to cart button to add product to cart.
3.) After click on add to cart it will redirect to cart page as given in documentation.
4.) In cart page you can checkout from there itself.
5.) Checkout page has four step of wizard to place order
------ checkout wizard --------
1.) Personal details every field is mandatory.
2.) Address detalis here alse every field is mandatory.
3.) Item list.
4.) Selet payment method , After click on confirm order , modal popups and show the receipt of order . after click on close it will redirect to home page.
6.) You can directly buy from home clicking on buy.

List of Components :

1.) home component.
2.) cart component.
3.) cart item.
4.) check-out component.
5.) check-out-step1 component
5.) check-out-step2 component
5.) check-out-final-step component
6.) navbar component.
7.) product component.

# ECom

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
