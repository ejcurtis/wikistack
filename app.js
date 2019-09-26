const express = require("express");
const morgan = require("morgan");
const { db } = require('./models');

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: false}));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening at ${PORT}`)
})

app.get("/", (req, res, next) => {
  try {
    res.send('');
  } catch (error) {
    next(error)
  }
});
db.authenticate().
  then(() => {
    console.log('connected to the database');
  })