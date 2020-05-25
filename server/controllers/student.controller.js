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
    res.status(500).send(error.details[0].message);
  }
}
