import mongoose from 'mongoose';

// Defining the Role model 
const Role = mongoose.model('Role', {
    // Role schema with specified fields and their data types
    id: String,
    name: { 
        type: String, 
        unique: true 
    },
    created_at: { 
        type: Date, 
        default: Date.now 
    },
    updated_at: Date,
});

export default Role;
