import express, {Request, Response} from "express"
import cors from "cors"
const app = express();


app.use(express.json());
app.use(cors());


app.listen(4000, ()=>{
    console.log("https://localhost:4000");
});