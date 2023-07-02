import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import connect from "./database/database.js";
const error = express();
import { body, validationResult } from 'express-validator'
import { usersRouter, studentsRouter } from "./routes/index.js";

const app = express();

app.use(express.json()); //gọi config trong thư viện dotenv (phải có)
const port = process.env.PORT || 3000;
//router
app.use("/users", usersRouter);
app.use("/students", studentsRouter);
app.get("/", (req, res) => {
  res.send("response from root routing, ha ha");
});
app.listen(port, async (req, res) => {
  await connect();
  console.log(`Listening on port:${port}`);
});
/*console.log('Hello, this is nodejs tutorial 2023')
import{
    sum,
    multiply,
    substract
} from './calculations.js';

console.log(`3 plus 2 is : ${sum(3, 2)}`)
console.log(`3 * 2 is : ${multiply(3, 2)}`)
console.log(`3 - 2 is : ${substract(3, 2)}`)
//1 file = 1 module
*/
