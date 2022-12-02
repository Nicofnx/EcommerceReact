Proyecto Ecommerce React

Este proyecto ha sido inicializado con [Create React App](https://github.com/facebook/create-react-app).

## Scripts ejecutables

En este proyecto puedes ejecutar:

### `npm start`

Ejecuta el app en entorno de Desarrollo\
Ejecuta [http://localhost:3000](http://localhost:3000) y se vizualiza en el navegador


### `npm test`

Ejecuta el test runnet e interactua escuchando las pruebas.

### `npm run build`

Se hace el build de la aplicacion para produccion y se crea la carpta de `build`

Mira la seccion de [deployment](https://facebook.github.io/create-react-app/docs/deployment) Para mas informacion

## Dependencias utilizadas
- `accounting`: Da formato de moneda a numeros
- `Feather-Icons`: Iconos para estilizar
- `React Router`: Linkeo de enlaces internos
- `React-SlidesShow-Image`: Carrusel de imagenes
- `SweetAlert2`: Da estilo a las alertas
- `Firebase`: Base de datos del backend. Servicio de google.

Nota: una vez clonado el proyecto a tu carpeta, ejecuta en tu terminal "npm install" para que se te descarguen estas dependencias y el proyecto funciones correctamente.

## Pre-requisitos
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js > 16](https://nodejs.org) y npm. (Recomendacion: usar [nvm](https://github.com/nvm-sh/nvm))


## Estructura de carpetas
- `src`: Es la carpeta contenedora de todo nuestro codigo dentro de la aplicacion de React y contiene todas las funcionalidades.
    - `components`: Es la carpeta que contiene todos los componentes de nuestra aplicacion.
    - `styles`: Contiene los archivos css de los componentes.

- `App.js`: Es el componente donde inicial toda la aplicacion.
- `context`: Es la carpeta que contiene los contextos que compartes los datos/estados de toda la aplicacion.
- `pages`: contiene las paginas (layout) principales de la aplicacion.
- `services`: Contiene las funciones que solicitan los datos a firebase.
- `images`: Contiene las imagenes estaticas que se utilizan en el proyecto.

## Estilos
En este proyecto se opto por utilizar css modularizado sin ninguna libreria especifica como lo puede ser Boostrap o Tailwind. 
Al utilizar esta forma de nombrar los archivos como "name.module.css" nos aseguramos de que los nombres de las clases nunca tengan problemas de nombramiento repetido.