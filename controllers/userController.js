import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Snowflake } from "@theinternetfolks/snowflake";

const secretKey = "your-secret-key";

// User signup endpoint
const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      id: Snowflake.generate(),
      name,
      email,
      password: hashedPassword,
    });

    // Generate JWT Token
    const token = jwt.sign(
      { userId: user.id, userEmail: user.email },
      secretKey
    );
    res.json({ user, token });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// User signin endpoint
const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { userId: user.id, userEmail: user.email },
      secretKey
    );
    res.json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get current user details endpoint
const me = (req, res) => {
  res.json({ user: req.user });
};

export { signup, signin, me };
