import mongoose from "mongoose"

const foodSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    quantity: {
      value: Number,
      unit: String, // kg, plates, packets
    },

    description: {
      type: String,
    },

    images: [
      {
        url: String,
        public_id: String,
      },
    ],

    pickupLocation: {
      address: String,
      lat: Number,
      lng: Number,
    },

    expiryTime: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["available", "claimed", "expired"],
      default: "available",
    },

    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    // 🔥 AI fields (IMPORTANT for hackathon)
    priorityScore: Number,
    matchedNgo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ngo",
    },
  },
  { timestamps: true }
)

export default mongoose.model("Food", foodSchema)