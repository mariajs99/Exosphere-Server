try {
    process.loadEnvFile()
} catch (error) {
    console.warn("archivo .env no encontrado, usando variables predeterminadas")
}

const { json } = require("body-parser")
const jsonServer = require("json-server")

const server = jsonServer.create()

const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(json());

const routes = jsonServer.router("db.json")

server.use(routes)

const PORT = process.env.PORT || 5005

server.listen(PORT, () => {
    console.log(`JSON server ejecutandose en el puerto ${PORT}`)
    console.log(`Acceso Local en url http://localhost:${PORT}`)
})



