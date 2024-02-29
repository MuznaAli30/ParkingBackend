import mongoose, { Schema } from "mongoose";

const registrationSchema = new Schema({

    Name:{type: String, required:true},
    Email:{type: String, required:true},
    Password:{type: String, required:true},
    Contact:{type: String, required:true},
    
});

const registerData = mongoose.model("register",registrationSchema);
export default registerData