const express = require('express');
const router = express.Router();

// Student model
const Students = require('../models/students');


router.get('/', async (req, res) => {
  try {
    const students = await Students.find({});
    res.send({ students })
  } catch(err) {
    res.status(400).send({ error: err });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);
    res.send({ student });
  } catch (err) {
    res.status(404).send({ message: 'Student not found!' });
  }
});


router.post('/', async (req, res) => {
  try {
    const newStudent = await Students.create({ name: req.body.name, email: req.body.email, phonenumber: req.body.phonenumber, hobbies: req.body.hobbies });
     res.send({ newStudent });
  } catch(err) {
    res.status(400).send({ error: err });
  }

});


router.put('/:id', async (req, res) => {
  try {
    const updatedStudent = await Students.findByIdAndUpdate(req.params.id, req.body);
     res.send({ message: 'The student was updated' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/students/:id
// @desc    Delete a student
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const removeStudent = await Students.findByIdAndRemove(req.params.id);
     res.send({ message: 'The student was removed' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});


module.exports = router;























