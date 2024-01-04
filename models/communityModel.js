import mongoose from 'mongoose';

// Defining the Community model 
const Community = mongoose.model('Community', {
    // Community schema with specified fields and their data types
    id: String,
    name: String,
    slug: { 
        type: String, 
        unique: true 
    },
    owner: { 
        type: String, 
        ref: 'User' 
    },
    created_at: { 
        type: Date, 
        default: Date.now 
    },
    updated_at: Date,
});

export default Community;
