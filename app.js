const express = require("express");
const app = express();
const { PORT = 3000 } = process.env;
const {HttpStatus,HttpResponseMessage} = require("./enums/http")

const usersRouter = require("./routes/users");
const cardRouter = require("./routes/cards");

app.use("/users", usersRouter);
app.use("/cards", cardRouter);


app.use((req, res) => {
  return res.status(HttpStatus.NOT_FOUND).send({message: HttpResponseMessage.NOT_FOUND});
});

app.listen(PORT, () => {
  console.log(`app listening at port ${PORT}`);
});