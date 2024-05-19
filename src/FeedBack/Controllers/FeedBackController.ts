import FeedBackSchema from '../Models/FeedBackSchema'
import { Request, Response, NextFunction, RequestHandler  } from 'express';

//add new feed back
export const addFeedBack: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    const Name = req.body.Name;
    const Message = req.body.Message


    try {

        const newFeedBack = await FeedBackSchema.create({ //new fedback
            Name : Name,
            Message : Message,
        });

        res.status(201).json(newFeedBack); //new feed back

    } catch (error) {
        next(error);
    
    }
};

//get feedbacks 
export const getFeedBacks : RequestHandler = async(re: Request, res : Response, next: NextFunction) => {
    try {
        const feedback = await FeedBackSchema.find().exec()
    res.status(200).json(feedback);
    } catch (error) {
        next(error);
    }
}
