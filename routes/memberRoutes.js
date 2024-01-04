import express from "express";
import { postMember, deleteMember } from "../controllers/memberController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router({ mergeParams: true });

// API endpoint for adding a new member (requires token verification)
router.post("/", verifyToken, postMember);
// API endpoint for deleting a member by ID (requires token verification)
router.delete("/:id", verifyToken, deleteMember);

export default router;
