# Backend Login

Aquí se verán aplicados los conocimientos adquiridos y el producto final debe contar con la documentación asociada y la solución tecnológica implementada, a continuación se describe lo que se debe realizar para el desarrollo del proyecto, la parte inicial describe algunos comportamientos y la segunda parte indica requerimientos técnicos o de configuración que se deben encontrar en el código del proyecto.

Este proyecto consta de una parte de investigación en donde se hace una suposición son una organización dedicada a una temática relacionado con el reto e identificar los productos o servicios que solucionan el problema planteado, esta tarea inicial de investigación puede ser consignada en diferentes documentos o anexos. Cada equipo debe encontrar un mínimo de 3 soluciones que se convertirán en los servicios, productos o herramientas que ofrecen a través de su portafolio de servicios.


##Portafolio de servicios
Se genra un sitio web público (landing page) en donde se deben encontrar una sección superior con un menú, el menú debe contar con enlaces a las demás secciones del sitio (o páginas si han elegido crear este recurso) y contar con un botón de login. La sección superior también debe contar con un banner (con al menos 3 imágenes que cambien tipo carrusel) de temática acorde al tipo de soluciones que se ofrezca.
Una sección siguiente donde, de acuerdo a la información de su reto, describan de manera general en qué sector y que tipo de soluciones ofrecen como empresa, un texto corto, infografía o imagen donde expresen el porqué las soluciones que ustedes ofrecen son de alta calidad.
La siguiente sección deberá contar con los servicios que la empresa ofrece, estos servicios deben ser gestionados desde el backend del proyecto y deberán contar con un nombre o título, imagen acorde al tipo de servicio o producto y una descripción del mismo. Se recomienda crear una página independiente donde puedan detallar la investigación que se hizo acerca del producto y una mejor descripción de lo que ofrecerían o de la tecnología que utilizan en el servicio o producto ofertado.
Se deberá implementar una sección inferior donde creen algunos casos de éxito o testimonios de las soluciones que ustedes ofrecen, donde con una foto, un texto y el nombre de la persona y/o empresa, van a referenciar porque su solución fue exitosa.
Finalmente debe contar con un footer donde deberá estar toda la información de contacto, que podrían ser un par de correos electrónicos, las diferentes ciudades donde trabajan, un teléfono y celular (no utilizar números telefónicos reales), también contener un enlace al repositorio del proyecto final de github, el repositorio debe ser público.



Se cuenta un una ruta por medio de método post para el inicio de sesión de la siguiente manera:


```js
'/api/auth/signin'
```

Cuando esta ruta es consumida desde el frontend la api debe responder en tres casos diferentes :


1. Cuando el usuario se loguea exitosamente, debe responder con un status 200 y propiedad accessToken de la siguiente manera :

```js
res.status(200).send({ accessToken: token });
```

2. El usuario no existe en la bases de dato, debe responder con un status 404 de la siguiente manera:

```js
res.status(404).send('User Not Found.');
```

3. El usuario ingresa una contraseña inválida, debe responder con un status 401 de la siguiente manera:

```js
res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
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

Queda de elección de cada grupo utilizar la bases de datos localmente que deseen ya sea la predeterminada en el archivo o utilizar mysql como se explicó en las sesiones anteriores, estas modificacion solo se deben realizar en el objeto “development”, las otras por ningún motivo deben ser modificadas esto podría alterar el resultado de la prueba y por ende su calificación.

## Modelo:
El modelo se creó por medio de sequelize cli con los atributos obligatorios : name,email , password de tipo string.
