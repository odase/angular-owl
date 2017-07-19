# Angular OWL Module

## Install all dependencies

Run `npm install --save @angular/material @angular/cdk`

and `npm install --save @angular/animations`

## Install angular-owl package

Run `npm install --save angular-owl`

## Adding this module in your application

Adding this code in your file : `app.module.ts`

```
import { AngularOwlComponentModule } from 'angular-owl';

@NgModule({
  imports: [
    AngularOwlComponentModule
  ],
})
export class AppModule { }
 ```

## Adding material stylesheet
Adding this line in your file : `angular-cli.json`
```
"styles": [
  ...
  "../node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css"
],
```

### Available pre-built themes:
* deeppurple-amber.css
* indigo-pink.css
* pink-bluegrey.css
* purple-green.css
