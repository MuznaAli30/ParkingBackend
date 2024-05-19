import * as FeedBackController from '../Controllers/FeedBackController';
import express from "express";

const router = express.Router()


router.post("/addFeedBack",FeedBackController.addFeedBack);
router.get("/getFeedBack", FeedBackController.getFeedBacks)
export default router;