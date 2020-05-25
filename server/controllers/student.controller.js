const Student = require("../models/Student.model");
const Joi = require('@hapi/joi')

const studentSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().email().required(),
  rut: Joi.string().required(),
});

exports.addStudent = async (req, res) => {
  try {
    await studentSchema.validateAsync(req.body);

    const student = new Student(req.body);

    const doc = await student.save();

    res.send(doc);
  } catch (error) {
    if (error.details[0].message) {
      return res.status(422).send(error.details[0].message);
    }
    
    res.status(500).send(error);
  }
}

exports.getStudents = async (req, res) => {
  try {
    const doc = await student.find();

    res.send(doc);
  } catch (error) {
    res.status(500).send(error);
  }
}


