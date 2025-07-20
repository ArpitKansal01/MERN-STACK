require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const app = express();

const AuthRoutes = require("./routes/auth");
const JobsRoutes = require("./routes/jobs");

app.use(express.json());

app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/jobs", JobsRoutes);

const PORT = process.env.PORT || 8080;

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    console.log("Connected to Database...");

    app.listen(PORT, () => {
      console.log(`Server is listening on PORT: ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
