import express from "express"
import { saveCode } from "../controllers/compilerController"

export const compilerRoute = express.Router()

compilerRoute.post("/save",saveCode)