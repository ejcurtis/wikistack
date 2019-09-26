const express = require('express');
const router = express.Router();
// const client = require("../models")
const addPage = require("../views/addPage")
const mainPage = require("../views/main")
const { Page } = (require("../models"))
// const editPage = require("../views/editPage")
router.use(express.urlencoded({ extended: false }));

router.get("/",(req, res, next)=>{
    res.send(mainPage())
})


router.post('/', async (req, res, next) => {
  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`
  try {
    // let regex = /\d\s/gi;
    let slug = ""
    let url = "https://localhost:3000/wiki/"
    if (req.body.title) {
      slug = `${url}${req.body.title.replace(' ', "_")}`
    } else {
      slug = `${url}new_post`
    }
    console.log(slug)
    const page = new Page({
      title: req.body.title,
      content: req.body.content,
      slug: slug
      })
    await page.save();
    res.redirect('/');
  } catch (error)
   { next(error) }
});
  

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  

router.get("/add",(req, res,next) => {

    res.send(addPage());
 
})

module.exports = router;