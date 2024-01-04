// Importing necessary modules and files
import express from 'express';
import connectDB from './config/db.js'
import userRoute from './routes/userRoutes.js'
import roleRoute from './routes/roleRoutes.js'
import memberRoute from './routes/memberRoutes.js'
import communityRoute from './routes/communityRoutes.js'

// Creating an instance of Express
const app = express();
const port = 3000;

// Connect to the database
connectDB();

// Parsing incoming JSON data
app.use(express.json());

// API for Server Testing
app.get('/app', async (req, res) => {
    try {
        res.json({
            "success":"App is started",
        })
    } catch (error) {
        res.status(500).json({
            error : 'Internal Server Error'
        })
    }
})

// Routing for various API endpoints
app.use("/v1/auth", userRoute);
app.use("/v1/role", roleRoute);
app.use("/v1/member", memberRoute);
app.use("/v1/community", communityRoute);

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
