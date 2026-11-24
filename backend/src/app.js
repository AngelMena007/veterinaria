import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"
import errorMiddleware from "./middlewares/errorMiddleware.js";

const app = express()

app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        mensaje: "API Veterinaria funcionando correctamente por Ángel Mena"
    })
})

app.use('/api/auth', authRoutes)

app.use((req, res) => {
    res.status(401).json({
        mensaje: "Ruta no encontrada"
    })
})

app.use(errorMiddleware)

export default app;