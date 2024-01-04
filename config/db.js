// const mongoose = require("mongoose");
import mongoose from 'mongoose';

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Attempt to establish a connection to the MongoDB database
    const conn = await mongoose.connect(process.env.URL);
    console.log(`MongoDB Connected`);
  } catch (error) {
    // Log an error message and exit the process if the connection fails
    console.log(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;