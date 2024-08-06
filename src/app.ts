import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import RegistrationRoutes from './Registration/Routes/RegistrationRoute';
import morgan from "morgan";
import cors from 'cors';
import BookSlotSpaceRoutes from './UserBooking/Routes/BookSlotSpaceRoutes'
import FeedBackRoutes from './FeedBack/Routes/FeedBackRoutes'

const app = express();

app.use(morgan("dev"));

app.use(express.json());
app.use(cors())


app.use("/Register", RegistrationRoutes);
app.use("/BookSlotSpace", BookSlotSpaceRoutes);
app.use("/feedback", FeedBackRoutes);

app.get("/", (req, res) => res.status(200).send("Hello world")); 

app.use((error: unknown, req : Request, res : Response, next : NextFunction) => {
    console.log(error);
        let errorMessage = "An unknkon error occured";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        res.status(500).json({error: errorMessage}); //server error

});

app.use((req : Request, res : Response, next : NextFunction) => {
    next(Error("Endpoint not found"))
})


export default app;

