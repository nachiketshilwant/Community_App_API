import Member from "../models/memberModel.js";
import { Snowflake } from "@theinternetfolks/snowflake";

// Adding a new member to a community
const postMember = async (req, res) => {
  try {
    const { communityId, userId, roleId } = req.body;
    const member = await Member.create({
      id: Snowflake.generate(),
      community: communityId,
      user: userId,
      role: roleId,
    });
    res.json(member);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Deleting a member by ID
const deleteMember = async (req, res) => {
  const memberId = req.params.id;
  try {
    await Member.deleteOne({ id: memberId });
    res.json({ message: "Member removed successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { postMember, deleteMember };