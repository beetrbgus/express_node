var express = require('express');
var User = require('../schemas/user');

var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch(error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const user  = new User({
      name : req.body.name,
      age : req.body.age,
      married : req.body.married,
    });
    await user.save();
    
    console.log(user);
    res.status(201).json(user);
    
  } catch(error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
