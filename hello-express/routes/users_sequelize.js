var express = require('express');
var User = require('../models').User;

var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch(error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    let user  = User.create({
      name : req.body.name,
      age : req.body.age,
      married : req.body.married,
    });

    console.log(user);
    res.status(201).json(user);
  } catch(error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
