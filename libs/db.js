import mongoose from 'mongoose'

const connectMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://user123:pass123@cluster0.wa4edtd.mongodb.net/")
        console.log("connected")
    } catch(err) {
        console.log(err)
    }
}

export default connectMongoDB