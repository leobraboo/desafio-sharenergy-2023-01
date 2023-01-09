import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI

export default function connect(): void {
  mongoose.set('strictQuery', false)

  mongoose.connect(mongoURI, {
  }, () => console.log("Connected to MongoDB"))
}