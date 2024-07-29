import mongoose from "mongoose";
import app from './src/app';

const port = process.env.PORT;

mongoose.connect(process.env.MONGO_CONNECTION_STRING!)
    .then(() => {
        console.log("mongoose connected" );
        app.listen(port, () => {
            console.log("server is running on port : " + port)
        });
    })
    .catch(console.error);
