// import mongoose, { Schema } from "mongoose";

// const BookSpaceSchema = new Schema({
//     image: { type: String, required: true },
//     startTimeUnix: { type: Number, required: true },
//     endTimeUnix: { type: Number, required: true },
//     slotNumber: { type: String, required: true },
//     userID: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "register" }
// });

// const BookSlotSpaceData = mongoose.model("BookSlotSpace", BookSpaceSchema);
// export default BookSlotSpaceData;

//newwwwwwwww
import mongoose, { Schema } from "mongoose";

const BookSpaceSchema = new Schema({
    image: { type: String, required: true },
    startTimeISO: { type: String, required: true },
    endTimeISO: { type: String, required: true },
    slotNumber: { type: String, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "register" }
});

const BookSlotSpaceData = mongoose.model("BookSlotSpace", BookSpaceSchema);
export default BookSlotSpaceData;

