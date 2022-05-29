const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8000;

const app = express();

// Middlewares to use the requested body data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`));
