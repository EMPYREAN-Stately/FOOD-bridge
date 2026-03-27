import express from "express"
import Ngo from "../models/Ngo.js"
import { matchBestNgo } from "../utils/matchNgo.js"

const router = express.Router()

router.post("/match", async (req, res) => {
  try {
    const food = req.body

    const ngos = await Ngo.find()

    const bestNgo = matchBestNgo(food, ngos)

    res.json({
      bestNgo
    })
  } catch (err) {
    res.status(500).json({ message: "AI match failed" })
  }
})

export default router