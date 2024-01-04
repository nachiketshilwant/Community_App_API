import express from "express";
import { signup, signin, me } from '../controllers/userController.js';
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router({ mergeParams: true });

// API endpoint for user signup
router.post("/signup", signup);
// API endpoint for user signin
router.post("/signin", signin);
// API endpoint to get user details (requires token verification)
router.get("/me", verifyToken, me);

export default router;
