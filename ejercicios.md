## Previa

Crear un proyecto nuevo en react configurado con eslint y con chakra ui,no es relevante los estilos que se usen es preferible hacer foco en la logica
se utilizara la api de rick and morty para desarrollar el sitio
https://rickandmortyapi.com/documentation/#introduction

Extras cada vez que se haga un peticion mostrar un loader que le indique al usuario que se esta buscando la informacion.

## ⚙️ _Ejercicio 1_ Basico

### Se quiere crear un spa de una landing page que muestre las siguiete rutas:

- /home -> Se muestra informacion basica (lorem )
- /character -> Se muestra informacion de los personajes en card
- /about -> Se muestra informacion extra

Aclaracion: Se debe poder navegar desde un navbar.En principio no deberia estar hecho con Chakra-ui.Una vez funcionando deberia integrarse React router dom con Chakra ui.

## ⚙️ _Ejercicio 2_ Mas detalle

### Agregar la siguientes secciones:

- /404 -> Se muestra una pantalla cuando se ingresa una url invalida
- /character/:id -> Se muestra la info de un personaje en particular

## ⚙️ _Ejercicio 3_ queryParams

### Modificar la vista de character para que se pueda realizar la siguiente accion:

- Permitir tomar filtros por la url (ej:status=alive)
- Cuando cambia de page tambien cambie en la url
  En ambos caso si se recarga la pagina los filtros deberian estar aplicados

## ⚙️ _Ejercicio 4_ Rutas protegidas

### Agregar la siguientes secciones

- /login -> Me permite acceder si no estoy logeado,caso contrario me lleva al home
- /profile -> Me permite accedes si estoy logeado,caso contrario me lleva al login

## ⚙️ _Ejercicio 5_ Rutas en rutas

### Agregar la siguientes secciones

- /course -> Muestra una lista de botones que me llevan a otra ruta
- /course/react -> Muestra un texto al azar
- /course/angular -> Muestra un texto al azar

## ⚙️ _Ejercicio 6_ Redireccionamiento

### Agregar la siguientes secciones

-/contact -> Muestra un form una vez completo este me envia al home
