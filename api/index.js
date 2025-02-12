import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { error } from "console";
dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

const app = express();

app.listen(3000, () => {
    console.log("Server is runnig on port 3000!");
});