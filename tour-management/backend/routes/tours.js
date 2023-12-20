import express from "express";
import {
    createTour,
    updateTour,
    deleteTour,
    getSingleTour,
    getAllTour,
    getTourSearch, getFeaturedTour, getTourCount
} from "../controllers/tourController.js";
import {verifyAdmin} from "../utils/Token.js";

const router = express.Router();

//create new tour
router.post("/",verifyAdmin, createTour);
router.delete("/:id",verifyAdmin, deleteTour);
router.put("/:id",verifyAdmin, updateTour);
router.get("/:id", getSingleTour);
router.get("/", getAllTour);
router.get("/search/getFeaturedTours", getFeaturedTour)
router.get("/search/getTourSearch", getTourSearch)
router.get("/search/getTourCount", getTourCount)
export default router;