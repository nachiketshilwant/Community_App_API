import Community from "../models/communityModel.js";
import { Snowflake } from "@theinternetfolks/snowflake";

// Creating a new community
const postCommunity = async (req, res) => {
  try {
    const community = await Community.create({
      id: Snowflake.generate(),
      owner: req.user.userId,
      ...req.body,
    });
    res.json(community);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Retrieving members of a community by ID
const getCommunity = async (req, res) => {
  try {
    const communities = await Community.find();
    res.json(communities);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Retrieving all communities
const getCommunityMemberbyID = async (req, res) => {
  const communityId = req.params.id;
  try {
    const members = await Member.find({ community: communityId });
    res.json(members);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Retrieving communities owned by the authenticated user
const getCommunityOwner = async (req, res) => {
  const ownerId = req.user.userId;
  try {
    const ownedCommunities = await Community.find({ owner: ownerId });
    res.json(ownedCommunities);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Retrieving communities in which the authenticated user is a member
const getYourCommunityMember = async (req, res) => {
  const memberId = req.user.userId;
  try {
    const joinedCommunities = await Member.find({ user: memberId }).populate(
      "community"
    );
    res.json(joinedCommunities.map((member) => member.community));
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  postCommunity,
  getCommunity,
  getCommunityMemberbyID,
  getCommunityOwner,
  getYourCommunityMember,
};
