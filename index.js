// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Atlas connection URI
const mongoURI = "mongodb+srv://abhishekdukare689:abhi%4021121211@cluster0.thybcll.mongodb.net/Idea-clan?retryWrites=true&w=majority";

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB Atlas connected successfully');
})
.catch((err) => {
  console.error('Error connecting to MongoDB Atlas:', err);
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

