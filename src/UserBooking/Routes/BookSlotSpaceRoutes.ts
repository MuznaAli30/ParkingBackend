import * as BookSlotSpaceController from '../Controller/BookSlotSpaceController';
import express from 'express';

const router = express.Router();

router.post("/BookSpace", BookSlotSpaceController.BookSlotSpace);
router.get("/bookSpaceGet", BookSlotSpaceController.getAllBookings);
router.get("/bookingSpaceGetByID/:id", BookSlotSpaceController.getOneUserBooking);
router.delete("/dltUserBooking/:id", BookSlotSpaceController.dltUserBooking);

export default router;
