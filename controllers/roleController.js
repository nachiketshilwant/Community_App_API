import Role from "../models/roleModel.js";

// Creating a new role
const postRole = async (req, res) => {
  try {
    const role = await Role.create(req.body);
    res.json(role);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Retrieving all roles
const getRole = async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { postRole, getRole };
