// Creating a simple express server

const express = require('express');
const app = express();
// MongoDB
const mongoose = require('mongoose'); 

app.use(express.json());

const productRoutes = require("./product.routes");
app.use("/products", productRoutes);

app.get("/", (req, res) => {
    res.send("Hello from Node API Server Updated");
  });
  
  
  mongoose.connect("mongodb+srv://myCluster:OJdbTuVIrWN6NwdX@cluster0.bmfwh.mongodb.net/myCollection?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
      console.log("Connected to database!");
      app.listen(3000, () => {
        console.log("Server is running on port 3000");
      });
    })
    .catch(() => {
      console.log("Connection failed!");
    });

// References:
// https://github.com/100xdevs-cohort-3/week-7-mongo -> This is a Todo application with user authentication using Express.js, Mongoose, and JSON Web Tokens (JWT).
// https://github.com/burakorkmez/mern-crash-course?tab=readme-ov-file -> This is a CRUD API that includes a frontend built using React.js
