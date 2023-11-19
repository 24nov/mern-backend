import mongoose from 'mongoose'

const Connection = async (url) => {
  try {
    await mongoose.connect(url)
    console.log('database connected successfully...')
  } catch (error) {
    console.log('Error while connecting with database', error)
  }
}

export default Connection
