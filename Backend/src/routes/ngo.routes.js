import express from "express"
import Ngo from "../models/Ngo.js"

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const ngos = await Ngo.find()
    res.json(ngos)
  } catch (err) {
    res.status(500).json({ message: "Error fetching NGOs" })
  }
})

export default router