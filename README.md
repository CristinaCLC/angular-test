# Dependencias/Instalaciones para poder probarlo

## 1.- Node.js

  Instalación de node.js bajándose el .exe desde su página:
	https://nodejs.org/es/

## 2.- Typescript

	Comprobar primero si hay una versión de typescript con:

	tsc -v

	En caso de que exista una versión anterior a la 2.0.0 hay que desinstalarla con:
	(Aviso si tienes Visual Studio instalado y quitas typescript puede dejar de funcionar)

	npm uninstall typescript -g

	Para instalar typescript ejecutar en la consola:

	npm install -g typescript

	(sudo npm install -g typescript) en linux/mac

## 3.- Gestor de Angular CLI

	Para instalarlo ejecutar en consola:

	npm install -g @angular/cli

https://github.com/angular/angular-cli/blob/master/packages/angular/cli/README.md#installation

## 4.- Navegar con la consola a la carpeta del proyecto y ejecutar:

  ng serve -o

# Ayuda por defecto de Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

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
# testing
