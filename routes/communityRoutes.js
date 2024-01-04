import express from "express";
import {
  postCommunity,
  getCommunity,
  getCommunityMemberbyID,
  getCommunityOwner,
  getYourCommunityMember,
} from "../controllers/communityController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router({ mergeParams: true });


// API endpoint for creating a new community (requires token verification)
router.post("/", verifyToken, postCommunity);
// API endpoint for retrieving communities (requires token verification)
router.get("/", verifyToken, getCommunity);
// API endpoint for retrieving members of a community by ID (requires token verification)
router.get("/:id/members", verifyToken, getCommunityMemberbyID);
// API endpoint for retrieving the owner of the current community (requires token verification)
router.get("/me/owner", verifyToken, getCommunityOwner);
// API endpoint for retrieving the current user's membership details in a community (requires token verification)
router.get("/me/member", verifyToken, getYourCommunityMember);

export default router;
