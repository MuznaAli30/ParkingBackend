import  BookSlotSpaceSchema from '../models/BookSlotSpaceSchema';
import { Request, Response, NextFunction, RequestHandler  } from "express";


//booking slot controller logic
export const BookSlotSpace: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    const image = req.body.image;
    const timing = req.body.timing;
    const slotNumber = req.body.slotNumber;
    const userID = req.body.userID;

    try {
        // const timingObject = JSON.parse(timing);

        const bookingExist = await BookSlotSpaceSchema.findOne({image,timing,slotNumber,userID});

        if(bookingExist) {
            return res.status(400).json({success : false , message : "already booked"});
        }

        const newBooking = await BookSlotSpaceSchema.create({
            image : image,
            timing : timing,
            slotNumber : slotNumber,
            userID : userID
        });

        res.status(200).json(newBooking);
    } catch (error) {
        next(error)
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

//get bookings of user bt id 
export const getOneUserBooking : RequestHandler = async(req: Request, res: Response, next: NextFunction) => {
    const bookingId = req.params.id;

    try {
        const booking = await BookSlotSpaceSchema.findById(bookingId).exec();
        
        if (booking) {
            res.status(200).json({ success: true, booking });
          } else {
            res.status(404).json({ success: false, message: 'booking not found' });
          }
    } catch (error) {
        next(error);
    }
}


//delet user 

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

