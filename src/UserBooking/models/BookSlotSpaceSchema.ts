import mongoose, { Schema } from "mongoose";

const BookSpaceSchema = new Schema({
    image: { type: String, required: true },
    timing: { type: Schema.Types.Mixed, required: true },
    slotNumber: { type: String, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "register" }
});

const BookSlotSpaceData = mongoose.model("BookSlotSpace", BookSpaceSchema);
export default BookSlotSpaceData;
