    import { Request, Response, NextFunction, RequestHandler  } from "express";
    import Registrationschema from '../models/RegistrationSchemaPage';
    import BookSlotSpaceSchema from '../../UserBooking/models/BookSlotSpaceSchema';
    import bcrypt from 'bcryptjs';

    // get all users saved in DB
    export const getRegisterUser : RequestHandler =  async (req : Request, res : Response, next:NextFunction) => {

        try { 
        const register = await Registrationschema.find().exec();
        res.status(200).json(register);
        }
        catch (error) {
            next(error);
        }
    };

    

    //get a single user by its id 
    export const getOneRegisterUser : RequestHandler = async (req: Request, res: Response, next : NextFunction) => {
        const registerid = req.params.id;
        
        try {
            const register = await Registrationschema.findById(registerid).exec();
            res.status(200).json(register);
            return;
        } catch (error) {
            next(error);
        }
    }
    //add or register one new user 
    export const addRegisterUser: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
        const Name = req.body.Name;
        const Email = req.body.Email;
        const Password = req.body.Password;
        const Contact = req.body.Contact;


        try {
            const userExist = await Registrationschema.findOne({Email}); //find user by its email to check if user exist or not

            if(userExist) { //check if user already exist 
                return res.status(400).json({success: false, message: "user already exist"});
            }
            if(!Name || !Email || !Password ||Password.length !> 6 || !Contact  ||Contact.length != 11){
                return res.status(204).json({Success: false , message: "Invalid Fields"})
            }

            const passwordHashed = await bcrypt.hash(Password, 15) //save password in hash form

            const newRegistration = await Registrationschema.create({ //registering new user
                Name : Name,
                Email : Email,
                Password : passwordHashed,
                Contact : Contact,
            });


            res.status(201).json(newRegistration); //user registered 

        } catch (error) {
            next(error);
        
        }
    };

  

// Delete a user by ID and their bookings
export const deleteUser: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.id;

    try {
        // Delete user's bookings first
        const bookingDeleteResult = await BookSlotSpaceSchema.deleteMany({ userID: userId });
        
        // Delete the user
        const userDeleteResult = await Registrationschema.findByIdAndDelete(userId);
        
        if (userDeleteResult) {
            res.status(200).json({
                success: true, 
                message: "User and their bookings deleted successfully",
                deletedBookingsCount: bookingDeleteResult.deletedCount
            });
        } else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        next(error);
    }
};



  //login api
    export const Login: RequestHandler = async (req : Request , res : Response, next : NextFunction) => {
        const Email = req.body.Email;
        const Password = req.body.Password;

        if (Email === "admin@gmail.com" && Password === "Admin1") {
            // Credentials match for Admin
            res.status(200).json({ success: true, role: "admin" });
            return;
        }

        const userInRegistrationSchema = await Registrationschema.findOne({Email});

        // check user found in shema?
        if(userInRegistrationSchema) {
            
            //user found in schema, now check user password
            const userPassword = await bcrypt.compare(Password, userInRegistrationSchema.Password);

            if(userPassword) {
                res.status(200).json({success:true, result : userInRegistrationSchema});
                return;//return to avoid further execution
            }
        }
        res.status(404).json({message: "user not found"}); //user is not registered 
    }

