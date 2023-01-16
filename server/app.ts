import express from 'express'
import authRoutes from './routes/authRoutes'

const app = express()

app.use(authRoutes)

export default app