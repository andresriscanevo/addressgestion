# Addressgestion

Este proyecto ha sido generado con angular [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.
Se sube la carpeta sin la carpeta node_modules de manera que una vez se cargue el proyecto en el ide correspondiente debe ejecutarse el comando en la terminal con la ruta del proyecto `npm install`.

## Desarrollo del servidor 

Al correr el comando `ng serve`se correr el servidor con la visualizacion del gestor de direcciones. al ir al link `http://localhost:4200/`. La aplicacion se cargara automaticamente con los cambios en los archivos, el comando `ng serve -o` correr el servidor y una vez este compila abre el navegador con la respectiva pagina.
Para tener en cuenta las direferentes opciones de visualizacion se complementan con la informacion extraida de manera dinamica desde el back realido en springboot con la base de datos de oracle, esta informacion la recoge de los diferentes endpoints con url base de `ST http://localhost:8080/caddress`

## versiones de las dependencias usadas 
Angular CLI: 15.0.2
Node: 16.17.0
Package Manager: npm 8.15.0
OS: win32 x64 
Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1500.2
@angular-devkit/build-angular   15.0.2
@angular-devkit/core            15.0.2
@angular-devkit/schematics      15.0.2
@schematics/angular             15.0.2
rxjs                            7.5.7
typescript                      4.8.4