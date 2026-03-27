import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"

import authRoutes from "./routes/auth.routes.js"
import foodRoutes from "./routes/food.routes.js"
import connectDB from "./config/db.js"
import ngoRoutes from "./routes/ngo.routes.js"
import aiRoutes from "./routes/ai.routes.js"

const app = express()

// ✅ Connect DB (ONLY ONCE)
connectDB()

// ✅ Middlewares
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true
}))

app.use(express.json())

// ✅ Routes
app.use("/api/auth", authRoutes)
app.use("/api/food", foodRoutes)
app.use("/api/ngos", ngoRoutes)
app.use("/api/ai", aiRoutes)

app.get("/", (req, res) => {
  res.send("API running 🚀")
})

// ✅ Start server (NO mongoose.connect here)
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🔥`)
})