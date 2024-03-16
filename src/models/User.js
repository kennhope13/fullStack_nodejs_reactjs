import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    Email: String,
    Name: String,
    Password: String,
    Createday: Date
})
module.exports = mongoose.model("users", userSchema);