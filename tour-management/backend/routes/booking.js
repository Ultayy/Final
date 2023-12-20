import express from "express";
import {verifyAdmin, verifyUser} from "../utils/Token.js";
import {createTourBooking, getAllBooking, getBooking} from "../controllers/tourBookingController.js";

const router = express.Router()
router.post('/',verifyUser, createTourBooking)
router.post('/:id',verifyUser, getBooking)
router.post('/',verifyAdmin, getAllBooking)
export default router