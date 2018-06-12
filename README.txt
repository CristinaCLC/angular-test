Dependencias
-------------------------

1.- Node.js
	
	https://nodejs.org/es/

2.- Typescript

	Comprobar primero si hay una versión de typescript con:
	tsc -v

	En caso de que exista una versión anterior a la 2.0.0 hay que desinstalarla con:
	(Aviso si tienes Visual Studio instalado y quitas typescript puede dejar de funcionar)
		
	npm uninstall typescript -g

	Para instalar typescript ejecutar en la consola:

	npm install -g typescript

	(sudo npm install -g typescript) en linux/mac

3.- Gestor de Angular CLI

	En consola ejecutar:
	npm install -g @angular/cli

https://github.com/angular/angular-cli/blob/master/packages/angular/cli/README.md#installation

4.- Ejecutar navegar con la consola a la carpeta y ejecutar ng serve -o