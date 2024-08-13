require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");

const DataRoutes = require("./routes/data");

// Database connection
connection();

// CORS options
const corsOptions = {
  origin: 'https://buyogoclient.vercel.app', // Replace with your client’s origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Middlewares
app.use(express.json());
app.use(cors(corsOptions)); // Apply CORS options

// Routes
app.use("/api/data", DataRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));

