import mongoose from 'mongoose';

// Defining the User model 
const User = mongoose.model('User', {
    // User schema with specified fields and their data types
    id: String,
    name: { 
        type: String, 
        default: null 
    },
    email: { 
        type: String, 
        unique: true 
    },
    password: String,
    created_at: { 
        type: Date, 
        default: Date.now 
    },
});

export default User;
