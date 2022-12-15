import mongoose from 'mongoose';

const MONGODB_URL = "mongodb+srv://Mind:Mindiola97_@cluster0.8jzlylr.mongodb.net/?retryWrites=true&w=majority"

export async function connectDB(){
  await mongoose.connect(MONGODB_URL)
  console.log('Database connected')
}
