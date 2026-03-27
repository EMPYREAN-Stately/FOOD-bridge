import express from "express"
import Food from "../models/Food.js"
import auth from "../middleware/auth.middleware.js"
import upload from "../middleware/upload.js"

const router = express.Router()

function getUrgency(expiryTime) {
  const hoursLeft = (new Date(expiryTime) - Date.now()) / (1000 * 60 * 60)

  if (hoursLeft < 2) return "HIGH"
  if (hoursLeft < 6) return "MEDIUM"
  return "LOW"
}

// Add food


router.post("/add", upload.array("images", 4), async (req, res) => {
  try {
    const {
      title,
      category,
      description,
      expiryTime,
      address,
      lat,
      lng,
      quantityValue,
      quantityUnit,
    } = req.body

    const images = req.files?.map((file) => ({
  url: file.path,
  public_id: file.filename,
})) || []

    const food = new Food({
      title,
      category,
      description,
      expiryTime,
      pickupLocation: {
        address,
        lat,
        lng,
      },
      quantity: {
        value: quantityValue,
        unit: quantityUnit,
      },
      images,
      donor: req.user?._id || null,
    })

    await food.save()

    res.json(food)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Error adding food" })
  }
})

// Get all food
router.get("/", async (req, res) => {
  const foods = await Food.find()

  const enriched = foods.map(food => ({
    ...food._doc,
    urgency: getUrgency(food.expiryTime)
  }))

  res.json(enriched)
})

export default router