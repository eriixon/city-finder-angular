# City Finder v.3.1.0 with Angular

## Description.
This light web application can help to find information about a city ot town just by a name. The result will be a single card or several cards for all cities/towns with the current name.

## Project Guidelines
- Simple - very user friendly
- Lightweight - Small file and memory footprint
- Flexible - Very easy to maintain

## How to use
* Chose the country - USA, Canada or Mexico
* Fill down the name of the city and click the button
* Try in at https://city-find.herokuapp.com/

## Technologies
* JavaScript Framework - Angular with TypeScript
* User Interface Framework - Material Design
* Database - Firebase
* Builder - Webpack
* Engine - Node JS and NPM 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

Also this app uses [Google Maps JS API](https://developers.google.com/maps/documentation/javascript/) to find the current city/tonw on the map and show it in the card.

## Reference

I developed this project using several frameworks:
* [City Finder v2.1.0 with Vue 2](https://github.com/eriixon/city-finder-vue2)
* [City Finder v4.0.0 with React](https://github.com/eriixon/city-finder-react)

## Build Setup

``` bash
# Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

# Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
```
The last step is to provide Firebase tokens, put them to fbconfig.js in config directory (needs to be created):
```
{
"apiKey":"...", 
"authDomain":"...",
"databaseURL": "...",
"projectId": "...",
"storageBucket": "...",
"messagingSenderId": "..."
}
```

## Version
The current version is 3.1 and placed at Heroku for demostration https://findcity.herokuapp.com/

## License
See the LICENSE file in the root directory of this source tree. Feel free to use and modify the code.
