const express = require("express");
const morgan = require("morgan");
const { db } = require('./models');
const app = express();
const models = require('./models/index');

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: false}));

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

const init = async() => {
 try{await models.User.sync();
 await models.Page.sync();
 app.listen(PORT, ()=>{
   console.log(`Server is listening on port ${PORT}!`)
 })}
 catch(error){
   console.error("Wrong!")
 }
}
init();
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening at ${PORT}`)
})