import * as RegistraionController from '../Controller/RegistrationController';
import express from "express";

const router = express.Router()

router.get("/getUsers", RegistraionController.getRegisterUser);
router.post("/addUsers",RegistraionController.addRegisterUser);
router.get("/registerid/:id",RegistraionController.getOneRegisterUser);
router.post("/loginUsers", RegistraionController.Login);

export default router;