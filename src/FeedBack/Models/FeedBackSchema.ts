import mongoose, { Schema } from "mongoose";

const feedbackSchema = new Schema({

    Name:{type: String, required:true},
    Message:{type: String, required:true},
    
});

const feedBackData = mongoose.model("feedback",feedbackSchema);
export default feedBackData