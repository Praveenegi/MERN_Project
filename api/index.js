import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"; 
import authRouter from "./routes/auth.route.js";
dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is runnig on port 3000!");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);