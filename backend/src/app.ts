import express, { Request, Response } from 'express';
import { db } from "./db/db";
import { users } from "./db/schema";
import cors from "cors"


import auth from "./router/auth";

const app = express();



app.use(express.json());
app.use(cors())

app.use('/auth', auth)

app.get("/", async (req, res) => {
  const result = await db.select().from(users);
  console.log(result)
  res.json({'foo': "bar"});
});


app.get('/ping', (req: Request, res: Response) => {
  res.json({ message: 'pong' });
});

export default app;