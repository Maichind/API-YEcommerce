import mongoose from 'mongoose'

const imageSchema = mongoose.Schema({
  name: {
    type : String,
    required : true,
    trin : true,
    unique : true
  },
  image: {
    public_id: String,
    secure_url: String
  }
})

export default mongoose.model('Image', imageSchema)