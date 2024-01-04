import express from "express";
import { postRole, getRole } from "../controllers/roleController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router({ mergeParams: true });

// API endpoint for creating a new role (requires token verification)
router.post("/", verifyToken, postRole);
// API endpoint for retrieving roles (requires token verification)
router.get("/", verifyToken, getRole);

export default router;
