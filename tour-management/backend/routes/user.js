import express from "express";
import {createUser, deleteUser, getAllUsers, getSingleUser, updateUser} from "../controllers/usercontroller.js";
import {verifyAdmin, verifyUser} from "../utils/Token.js";

const router = express.Router()

//create new tour
router.post("/", createUser);
router.delete("/:id",verifyUser, deleteUser);
router.put("/:id",verifyUser, updateUser);
router.get("/:id", verifyUser, getSingleUser);
router.get("/",verifyAdmin, getAllUsers);
export default router;