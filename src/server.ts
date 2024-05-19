import mongoose from "mongoose";
import app from './app';

const port = process.env.PORT;

mongoose.connect(process.env.MONGO_CONNECTION_STRING!)
    .then(() => {
        console.log("mongoose connected" );
        app.listen(port, () => {
            console.log("server is running on port : " + port)
        });
    })
    .catch(console.error);



///real timmmmmmeeeeeeeeeee
// import mongoose from "mongoose";
// import app from './app';
// import http from 'http';
// import { Server } from 'socket.io';

// const port = process.env.PORT;

// // Create HTTP server
// const server = http.createServer(app);

// // Initialize Socket.io
// const io = new Server(server, {
//   cors: {
//     origin: "*", // Allow all origins (update this for better security)
//     methods: ["GET", "POST"]
//   }
// });

// // Socket.io event handling
// io.on('connection', (socket) => {
//   console.log('New client connected');

//   // Example: Emit a welcome message to the client
//   socket.emit('message', 'Welcome to the parking website!');

//   // You can add more event handlers here as needed for real-time functionality
//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });
// });

// // Connect to MongoDB and start the server
// mongoose.connect(process.env.MONGO_CONNECTION_STRING!)
//   .then(() => {
//     console.log("mongoose connected");
//     server.listen(port, () => {
//       console.log("server is running on port : " + port);
//     });
//   })
//   .catch(console.error);
