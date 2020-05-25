const express = require('express')
const router = express.Router()

const student = require('../controllers/student.controller')

module.exports = app => {
  router.get("/", (req, res) => {
    res.send("Hello from Node.js App \n");
  });

  router.post('/students', student.addStudent)

  app.use('/api', router)
}