import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDb.js";
const app = express();

dotenv.config();
app.use("/api/auth", authRoutes);

console.log(process.env.MONGO_URI);

app.get("/", (req, res) => {
  res.send("server has started");
});

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
  connectMongoDB();
});
