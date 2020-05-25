const express = require('express')
const router = express.Router()

const student = require('../controllers/student.controller')

module.exports = app => {
  router.get("/", (req, res) => {
    res.send("Hello from Node.js App \n");
  });

  router.route("/students")
    .post(student.addStudent)
    .get(student.getStudents);

  app.use('/api', router)
}