import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDb.js";
import cookieParser from "cookie-parser";
const app = express();

dotenv.config();
app.use(express.json()); //to parse req.body
app.use(express.urlencoded({ extended: true })); //to parse form data
app.use(cookieParser());
app.use("/api/auth", authRoutes);

console.log(process.env.MONGO_URI);

app.get("/", (req, res) => {
  res.send("server has started");
});

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
  connectMongoDB();
});
