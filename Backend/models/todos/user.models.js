import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type : String,
        unique: true,
        required: true,
        lowercase: true
    },
    email:{
        type : String,
        unique: true,
        required: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true
    }
},{timestamps: true})

export const user = mongoose.model("User" , userSchema)