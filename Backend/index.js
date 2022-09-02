const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const wasteRoute = require('./routes/waste');
const authRoute = require('./routes/auth');

// Initiallization
const app = express();
dotenv.config();

// Settings
const port = process.env.PORT || 4000;
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("DB Connected"))
    .catch((err) => {
        console.log(err);
    });

// Middlewares
app.use(express.urlencoded({ extended: false }));     // Aceptar datos de formulario sencillo
app.use(express.json());
app.use(cors());
app.use(morgan("common"));

// Routes
app.use("/api/waste", wasteRoute);
app.use("/api/auth", authRoute);

// Server start
app.listen(port, () => {
    console.log(`Backend server is running on port ${port}`);
});