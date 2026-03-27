import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["donor", "ngo"], default: "donor" },
  contributionScore: { type: Number, default: 0 }
}, { timestamps: true })

export default mongoose.model("User", userSchema)