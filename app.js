const express = require("express");
const morgan = require("morgan");
const { db } = require('./models');
// const { db, User, Page } = require('./models');
const app = express();
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: false}));
 app.use('/wiki', require('./routes/wiki'))

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
const PORT = 3000;

const init = async () => {
 try {
//   await User.sync();
//  await Page.sync();
await db.sync()
 app.listen(PORT, ()=>{
   console.log(`Server is listening on port ${PORT}!`)
 })}
 catch (error) {
   console.error('WRONG')
 }
}

init();

db.sync({ force: true })

