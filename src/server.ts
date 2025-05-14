import express from "express";

const app = express()

const PORT = 3000

app.use(express.json())

app.get("/", (req, res) => {
  //const result = await db.select().from(users);
  res.json({'foo': 'red'});
});

app.listen(PORT, () => {
    console.log(`Server ${PORT}`)
})