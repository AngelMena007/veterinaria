import mongoose from "mongoose"

const conectarBD = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB conectado correctamente!")

    } catch (error) {
        console.error("Error al conectar con MongoDB: ", error.message)
        throw error
    }
}

export default conectarBD;