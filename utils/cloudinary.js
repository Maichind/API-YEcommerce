import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dmjo3lld7',
  api_key: '952258137473538',
  api_secret: 'QF9ummw7cWEieSjtfZWXKdTWf6M',
  secure: true
})

export async function uploadImage(filePath){
  return await cloudinary.uploader.upload(filePath, {
    folder: "imagenes"
  })
}

export async function delImage(publicId){
  return await cloudinary.uploader.destroy(publicId)
}