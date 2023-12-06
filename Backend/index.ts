import express, {Application} from "express"
import cors from "cors"
import dotEnv from "dotenv"
const app: Application = express();


const URL: string | undefined = process.env.DATABASE_STRING;


