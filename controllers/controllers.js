import Image from '../models/images.model.js'
import {uploadImage, delImage} from '../utils/cloudinary.js'
import fs from 'fs-extra'

export const getImages = async (req, res) => {
  try{
    const images = await Image.find() 
    res.json(images)
  } catch(error){
    return res.status(500).json({message: error.message})
  }
}

export const getImage = async (req, res) => {
  try{
    const image = await Image.findById(req.params.id)
    if(!image) return res.status(404).json({
      message: 'Image does not exist'
    })
    return res.json(image)
  } catch (error){
    return res.status(500).json({message: error.message})
  }
}

export const postImages = async (req, res) => {
  try{
    const {name} = req.body
    const image = new Image({
      name
    })
    
    if(req.files?.image){
      const result = await uploadImage(req.files.image.tempFilePath)
      image.image = {
        public_id: result.public_id,
        secure_url:result.secure_url
      }
      await fs.unlink(req.files.image.tempFilePath)
    }
    
    await image.save()
    res.json(image)
  } catch(error){
    return res.status(500).json({message: error.message})
  }
}

export const putImage = async (req, res) => {
  try{
    const {id} = req.params
    const image = await Image.findByIdAndUpdate(id, req.body, {
      new : true
    })
    return res.json(image)
  } catch(error){
    return res.status(500).json({message: error.message})
  }
}

export const deleteImage = async (req, res) => {
  try{
    const image = await Image.findByIdAndDelete(req.params.id)
    if(!image) return res.status(404).json({
      message: 'Image does not exist'
    })
    
    if(image.image?.public_id){
      await delImage(image.image.public_id)
    }
    
    return res.json(image)
  } catch(error){
    return res.status(500).json({message: error.message})
  }
}