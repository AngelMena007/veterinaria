import "dotenv/config"
import app from "./src/app.js"
import conectarBD from "./src/config/database.js"

const PORT = process.env.PORT || 3000

const iniciarServidor = async () => {
    try {
        await conectarBD()
        app.listen(PORT, () => {
            console.log(`Servidor ejecutandose en http://localhost:${PORT}`)
        
        })
    } catch (error) {
        console.error("Error al iniciar servidor: ", error.message);
        process.exit(1);
    }
}

iniciarServidor();