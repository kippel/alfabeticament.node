import express from "express";
import { db } from "./db/db";
import { users } from "./db/schema";
import cors from "cors"

import authRoutes from "./routes/auth.routes.ts" 


const app = express()

const PORT = 4000

app.use(express.json())
app.use(cors())


app.use(authRoutes)

app.get("/", async (req, res) => {

  const result = await db.select().from(users);
  console.log(result)
  res.json({'foo': result});
});

app.listen(PORT, () => {
    console.log(`Server ${PORT}`)
})