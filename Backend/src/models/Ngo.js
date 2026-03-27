import mongoose from "mongoose"

const ngoSchema = new mongoose.Schema({
  name: String,
  location: String,
  capacity: Number, // how much food they can take
  lat: Number,
  lng: Number,
})

export default mongoose.model("Ngo", ngoSchema)