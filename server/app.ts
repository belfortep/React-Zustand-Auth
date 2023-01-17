import express from 'express'
import authRoutes from './routes/authRoutes'
import cors from 'cors'
const app = express()

app.use(cors({
        origin: 'http://localhost:4000',
        credentials: true
}))
app.use(authRoutes)

export default app