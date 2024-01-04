import mongoose from 'mongoose';

// Defining the Member model 
const Member = mongoose.model("Member", {
  // Member schema with specified fields and their data types
  id: String,
  community: { 
    type: String, 
    ref: "Community" 
  },
  user: { 
    type: String, 
    ref: "User" 
  },
  role: { 
    type: String, 
    ref: "Role" 
  },
  created_at: { 
    type: Date, 
    default: Date.now 
  },
});

export default Member;
