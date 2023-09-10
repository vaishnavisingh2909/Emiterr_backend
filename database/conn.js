import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect("mongodb+srv://vaishnavisingh:Vaish123@cluster0.iavlkj5.mongodb.net/")
    console.log("Database Connected")
}