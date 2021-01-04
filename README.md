# Backend Login

Aquí se verán aplicados los conocimientos adquiridos y el producto final debe contar con la documentación asociada y la solución tecnológica implementada, a continuación se describe lo que se debe realizar para el desarrollo del proyecto, la parte inicial describe algunos comportamientos y la segunda parte indica requerimientos técnicos o de configuración que se deben encontrar en el código del proyecto.

Este proyecto consta de una parte de investigación en donde se hace una suposición son una organización dedicada a una temática relacionado con el reto e identificar los productos o servicios que solucionan el problema planteado, esta tarea inicial de investigación puede ser consignada en diferentes documentos o anexos. Cada equipo debe encontrar un mínimo de 3 soluciones que se convertirán en los servicios, productos o herramientas que ofrecen a través de su portafolio de servicios.


## Portafolio de servicios
Se genra un sitio web público (landing page) en donde se deben encontrar una sección superior con un menú, el menú debe contar con enlaces a las demás secciones del sitio (o páginas si han elegido crear este recurso) y contar con un botón de login. La sección superior también debe contar con un banner (con al menos 3 imágenes que cambien tipo carrusel) de temática acorde al tipo de soluciones que se ofrezca.
Una sección siguiente donde, de acuerdo a la información de su reto, describan de manera general en qué sector y que tipo de soluciones ofrecen como empresa, un texto corto, infografía o imagen donde expresen el porqué las soluciones que ustedes ofrecen son de alta calidad.
La siguiente sección deberá contar con los servicios que la empresa ofrece, estos servicios deben ser gestionados desde el backend del proyecto y deberán contar con un nombre o título, imagen acorde al tipo de servicio o producto y una descripción del mismo. Se recomienda crear una página independiente donde puedan detallar la investigación que se hizo acerca del producto y una mejor descripción de lo que ofrecerían o de la tecnología que utilizan en el servicio o producto ofertado.
Se deberá implementar una sección inferior donde creen algunos casos de éxito o testimonios de las soluciones que ustedes ofrecen, donde con una foto, un texto y el nombre de la persona y/o empresa, van a referenciar porque su solución fue exitosa.
Finalmente debe contar con un footer donde deberá estar toda la información de contacto, que podrían ser un par de correos electrónicos, las diferentes ciudades donde trabajan, un teléfono y celular (no utilizar números telefónicos reales), también contener un enlace al repositorio del proyecto final de github, el repositorio debe ser público.

## Backend o Zona de Gestión
El backend o la zona de gestión, deberá contar con la administración de los servicios que se van a visualizar en el sitio web principal o Portafolio de Servicios, Los nombres de las rutas, componentes y demás aspectos técnicos están definidos en la sección requisitos obligatorios estructura backend.
El backend implementará el módulo de autenticación realizado en la semana 3 para validar los usuarios y sus roles, la zona de administración debe contar inicialmente con la gestión o CRUD de Artículos y Categorías (como dos elementos de nombre genérico independiente del servicios que se vaya a implementar) y posteriormente se implementará la gestión de usuarios allí mismo. Para el manejo de rutas, se debe implementar el router-view con el fin de sacar provecho del poder de Vue y su característica de SPA. El back deberá proveer una API que permitirá realizar las diferentes peticiones a sus componentes desde el landing page

## Login Endpoint:
Se debe contar un una ruta por medio de método post para el inicio de sesión de la siguiente manera:

    ```js
    '/api/usuario/login'
    ```

Cuando esta ruta es consumida desde el frontend la api debe responder en tres casos diferentes :


1. Cuando el usuario se loguea exitosamente ,debe responder con un status 200 y propiedad tokenReturn de la siguiente manera :

    ```js
    res.status(200).json({ user, tokenReturn });
    ```

2. El usuario no existe en la bases de dato, debe responder con un status 404 de la siguiente manera:

    ```js
    res.status(404).send('User Not Found.');
    ```

3. El usuario ingresa una contraseña inválida, debe responder con un status 401 de la siguiente manera:

    ```js
    res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
    ```

## Categorías Endpoints:
1. Se debe contar un una ruta por medio de método post para listar las categorias de la siguiente manera:

    ```js
    '/api/categoria/list'
    ```

- Cuando la solicitud se procesa correctamente el sistema deberá responder con un status 200:

    ```js
    res.status(200);
    ```

2. Se debe contar un una ruta por medio de método post para agregar una nueva categoría de la siguiente manera:
    ```js
    '/api/categoria/add'
    ```

- Cuando la solicitud se procesa correctamente el sistema deberá responder con un status 200:

    ```js
    res.status(200);
    ```


3. Se debe contar un una ruta por medio de método post para activar estado del categoría de la siguiente manera:

    ```js
    '/api/categoria/activate'
    ```

- Cuando la solicitud se procesa correctamente el sistema deberá responder con un status 200:

    ```js
    res.status(200);
    ```

4. Se debe contar un una ruta por medio de método post para desactivar estado del categoría de la siguiente manera:

    ```js
    '/api/categoria/deactivate'
    ```

- Cuando la solicitud se procesa correctamente el sistema deberá responder con un status 200:

    ```js
    res.status(200);
    ```

## Articulos Endpoints:
1. Se debe contar un una ruta por medio de método post para listar los articulos de la siguiente manera:
    ```js
    '/api/articulo/list'
    ```

- Cuando la solicitud se procesa correctamente el sistema deberá responder con un status 200:

    ```js
    res.status(200);
    ```

2. Se debe contar un una ruta por medio de método post para agregar un nuevo articulo de la siguiente manera:

    ```js
    '/api/articulo/add'
    ```

- Cuando la solicitud se procesa correctamente el sistema deberá responder con un status 200:

    ```js
    res.status(200);
    ```


3. Se debe contar un una ruta por medio de método post para activar estado del articulo de la siguiente manera:
    ```js
    '/api/articulo/activate'
    ```

- Cuando la solicitud se procesa correctamente el sistema deberá responder con un status 200:

    ```js
    res.status(200);
    ```

4. Se debe contar un una ruta por medio de método post para desactivar estado del articulo de la siguiente manera:
    ```js
    '/api/articulo/deactivate'
    ```

- Cuando la solicitud se procesa correctamente el sistema deberá responder con un status 200:

    ```js
    res.status(200);
    ```


## Bases de datos 

En el directorio config/config.json encontrarán las credenciales para la conexión de las bases de datos de la siguiente manera:

```json
{
    "development": {
        "username": "xxxxxxxxx",
        "password": "xxxxxxxxx",
        "database": "xxxxxxxxx",
        "host": "remotemysql.com",
        "dialect": "mysql"
    },
    "test": {
        "dialect": "sqlite",
        "storage": "./database.sqlite3"
    },
    "production": {
        "dialect": "sqlite",
        "storage": "./database.sqlite3"
    }
}
```

Queda de elección utilizar la bases de datos localmente que deseen ya sea la predeterminada en el archivo o utilizar mysql como se explicó en las sesiones anteriores, estas modificacion solo se deben realizar en el objeto “development”, las otras por ningún motivo deben ser modificadas esto podría alterar el resultado de la prueba y por ende su calificación.

## Modelos:
Los modelosse creó por medio de sequelize cli con los atributos obligatorios.

### Modelo Usuario:

```cmd
npx sequelize-cli model:generate --name Usuario --attributes rol:string,nombre:string,password:string,email:string,estado:integer
```
Como podemos observar tenemos nuevos atributos uno de ellos es rol , lo utilizaremos para manejar restricciones de usuario según su rol, los roles serán:
- Administrador:con acceso total al sistema
- Vendedor:solo para acceso al módulo de ventas.
- Almacenero:solo acceso al módulo de ingresos ,artículos y categorías.

### Modelo Categoria:

```cmd
npx sequelize-cli model:generate --name Categoria --attributes nombre:string,descripcion:string,estado:integer
```

### Modelo Artículos:

```cmd
npx sequelize-cli model:generate --name Articulo --attributes codigo:string,nombre:string,descripcion:string,estado:integer,categoriaId:integer
```


