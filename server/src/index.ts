import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnect } from "./lib/dbConnect";

const app = express();

app.use(express.json());
app.use(cors());
config();

dbConnect();
app.listen(4000, () => {
  console.log("https://localhost:4000");
});
