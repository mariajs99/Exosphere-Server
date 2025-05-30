# Project Name

This repository is a [json-server](https://github.com/mariajs99/Exposphere-Server.git) created to feed data into the React Application below.

#### [Client Repo here](https://github.com/mariajs99/Exposphere)

# Server Structure

## Collections

### museos

```javascript
{
    nombre,
    historia,
    ciudad,
    horario,
    imagen,
    precio,
    categoria,
    id,
    favorito
}
```

### opiniones

```javascript
 {
    id,
    usuario,
    comentario,
    puntuacion,
    museoId
 }
```

## Used API Endpoints in the App

| HTTP Method | URL              | Request Body                | Description                 |
| ----------- | ---------------- | --------------------------- | --------------------------- |
| GET         | `/museos`         |                            | Sends all museums           |
| POST        | `/opiniones`         | {title, description, rate}    | Creates an review of a museum          |
| PATCH         | `/museos/:museoId` | {isFav}                            | Adds museum to favourite |
| GET         | `/museos/:museoId` | {nombre, historia, ciudad, horario, imagen, precio, categoria,id,  favorito} | Sends all details of museum         |
| GET      | `/opiniones/` |  {title, description, rate}                           | Sends all properties of a review       |
| PUT         | `/museos/:museoId`       | {nombre, historia, ciudad, horario, imagen, precio, categoria,id,  favorito}                            | Edit a museum           |
| DELETE        | `/museos/:museoId`       |               | Delete a museum        |
| PATCH       | `/museos/:museoId`       | {isFav}              | Delete a museum of favourite (edit their property favorito)              |

## Links

### Collaborators

[María Jiménez Sánchez](https://github.com/mariajs99)

### Project

[Repository Link Client](https://github.com/mariajs99/Exposphere.git)

[Repository Link Server](https://github.com/mariajs99/Exposphere-Server.git)

[Deploy Link](https://exposphere.netlify.app)
