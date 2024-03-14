var express = require('express');
var router = express.Router();
var User = require('../models').User;

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();  
    res.render('sequelize', {users});
  } catch (error) {
    console.error(error);
    next(error);    
  }
});

module.exports = router;
