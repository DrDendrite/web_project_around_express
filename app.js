const express = require("express");
const usersRouter = require("./routes/users");
const cardRouter = require("./routes/cards");
const mongoose = require("mongoose");
const app = express();
const { PORT = 3000 } = process.env;
const {HttpStatus,HttpResponseMessage} = require("./enums/http")


app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: '5d8b8592978f8bd833ca8133'
  };

  next();
});

mongoose.connect('mongodb://localhost:27017/aroundb',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> console.log("MongoDB connect successfully"))
.catch(err=> console.error("Mongo connection error",err))


app.use("/users", usersRouter);
app.use("/cards", cardRouter);

app.use((req, res) => {
  return res.status(HttpStatus.NOT_FOUND).send({message: HttpResponseMessage.NOT_FOUND});
});

app.listen(PORT, () => {
  console.log(`app listening at port ${PORT}`);
});