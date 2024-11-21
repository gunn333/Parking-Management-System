// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const connectDb = require('./config/dbConnection');
// const cors = require('cors');
// dotenv.config(); // Load environment variables

// const app = express();

// // Connect to MongoDB
// connectDb(); // Call the function once

// // Middleware
// app.use(express.json());

// // Routes
// app.get('/', (req, res) => {
// 	res.send('API is running...');
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDb = require('./config/dbConnection');
const cors = require('cors');

dotenv.config(); // Load environment variables

const app = express();

// Connect to MongoDB
connectDb();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for frontend communication

// Routes
const parkingRoutes = require('./routes/parkingRoutes');
const walletRoutes = require('./routes/walletRoutes');
const userRoutes = require('./routes/userRoute');


app.use('/api/parking', parkingRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/user', userRoutes);  

// Routes
app.get('/', (req, res) => {
	res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
