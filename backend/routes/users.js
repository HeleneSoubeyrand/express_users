const express = require("express")
const app = express()
const { body, validationResult } = require('express-validator')


let users = require("../users.json")

app.get("/", (req, res) => {
  res.json(users)
})

app.get("/:slug", (req, res) => {
  const { slug } = req.params
  const user = users.find(user => user.slug === slug)
  
  if (!user) {
    res.status(404).send("User not found")
  } else {
    res.json(user)
  }  
})

app.post("/",
  body('name')
  // = comme un middleware
    .exists().withMessage("Name is required")
    .isLength({ min: 4 }).withMessage("Name is too short"),
  body('password')
    .exists().withMessage("Password is required")
    .isLength({ min: 8 }).withMessage("Password is too short"),
  body('city')
    .optional()
    .isIn(["Paris", "Tokyo", "Los Angeles"]).withMessage("City value is not accepted"),

  (req, res) => {
    const { errors } = validationResult(req)
    console.log(errors)
    
    if (errors.length > 0) {
      res.status(400).json({ errors })
    } else {
      const user = {
        slug: req.body.name.toLowerCase().replace(/[^\w]/gi, '-'),
        ...req.body
      }
      users = [ ...users, user ]
      res.json(user)
    }
  }
)

module.exports = app
