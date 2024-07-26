import  BookSlotSpaceSchema from '../models/BookSlotSpaceSchema';
import { Request, Response, NextFunction, RequestHandler  } from "express";

//book space by user mineeeeeeeeeeeeeeee
// export const BookSlotSpace: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
//     const { image, timing, slotNumber, userID } = req.body;

//     try {
//         const { startTimeUnix, endTimeUnix } = timing;
        
//         // Check for overlapping bookings
//         const overlappingBooking = await BookSlotSpaceSchema.findOne({
//             slotNumber,
//             $or: [
//                 { startTimeUnix: { $lt: endTimeUnix, $gt: startTimeUnix } },
//                 { endTimeUnix: { $lt: endTimeUnix, $gt: startTimeUnix } },
//                 { startTimeUnix: { $lte: startTimeUnix }, endTimeUnix: { $gte: endTimeUnix } }
//             ]
//         });
        

//         if (overlappingBooking) {
//             return res.status(400).json({ success: false, message: "Slot is already booked" });
//         }

//         const newBooking = await BookSlotSpaceSchema.create({
//             image,
//             startTimeUnix,
//             endTimeUnix,
//             slotNumber,
//             userID
//         });

//         res.status(200).json(newBooking);
//     } catch (error) {
//         next(error);
//     }
// };

//new ISO
export const BookSlotSpace: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    const { image, timing, slotNumber, userID } = req.body;

    try {
        const { startTimeISO, endTimeISO } = timing;
        
        // Check for overlapping bookings
        const overlappingBooking = await BookSlotSpaceSchema.findOne({
            slotNumber,
            $or: [
                { startTimeISO: { $lt: endTimeISO, $gt: startTimeISO } },
                { endTimeISO: { $lt: endTimeISO, $gt: startTimeISO } },
                { startTimeISO: { $lte: startTimeISO }, endTimeISO: { $gte: endTimeISO } }
            ]
        });

        if (overlappingBooking) {
            return res.status(400).json({ success: false, message: "Slot is already booked" });
        }

        const newBooking = await BookSlotSpaceSchema.create({
            image,
            startTimeISO,
            endTimeISO,
            slotNumber,
            userID
        });

        res.status(200).json(newBooking);
    } catch (error) {
        next(error);
    }
};



//GET logic for booking slot
export const getAllBookings : RequestHandler = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const booking = await BookSlotSpaceSchema.find().populate({path:"userID"});
        res.status(200).json(booking);
    } catch (error) {
        next(error);
        
    }
}
//get bookings of user by id 
export const getOneUserBooking: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    let userID = req.params.userID;
    console.log(`Fetching booking with ID: '${userID}'`);

    try {
        const bookings = await BookSlotSpaceSchema.find({ userID }).populate('userID');
        console.log("Bookings", bookings);

        if (bookings.length > 0) {
            res.status(200).json(bookings);
        } else {
            res.status(404).json({ success: false, message: 'No bookings found for this user' });
        }
    } catch (error) {
        console.error(`Error fetching bookings: ${error}`);
        next(error);
    }
};

//delet user booking by id 

export const dltUserBooking : RequestHandler = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    console.log(id)

    let result = await BookSlotSpaceSchema.deleteOne({_id: id});


    if(result.deletedCount === 1){
        res.send('deleted');
    }
    else{
        res.status(404).send('not found')
    }
}

