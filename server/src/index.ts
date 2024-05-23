import express from "express"
import cors from "cors"
import { config } from "dotenv";

const app = express();


app.use(express.json());
app.use(cors());
config();

app.listen(4000, ()=>{
    console.log(process.env.TEST);
    
    console.log("https://localhost:4000");
});