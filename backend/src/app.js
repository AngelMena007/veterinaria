import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"

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

export default app;