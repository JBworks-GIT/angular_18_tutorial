# Angular18Tutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


** whenever we run angular project first file that runs is main.ts **


folder structure
package.json
        dependencies: packages required by user to build the project.

        devdepencies: packages required by user to locally run angular project.

angular.json 
            angular project ka setting ya config ka file


style.css
        global css

tsconfig.json
            typescript related setting
src
        index.html : this is the page that always run <body><app-root></app-root></body> this has all the content of our project

        main.js : first program that bootstrap runs appComponent and appconfig


ng genrate component name
html 
css 
ts
spec.ts //ignore


data binding
                one way data binding
                        sending data from html to ts or ts to html