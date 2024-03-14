var express = require('express');
var {User, Comment} = require('../models');

var router = express.Router();

router.get('/:id', async (req, res, next) => {
  try {
    let comments = await Comment.findAll({
      include : {
        model : User,
        where : { id: req.params.id },
      },
    });
    res.json(comments);

  } catch(error) {
    console.error(error);
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    let comment = await Comment.create({
      commenter : req.body.id,
      comment : req.body.comment,
    });
    res.status(201).json(comment);

  } catch (error) {
    console.error(error);
    next(error);  
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    let comment = await Comment.update(
      {
        comment : req.body.comment,
      }, 
      {
        where : { id : req.params.id}  
      }
    );
    res.status(201).json(comment);

  } catch (error) {
    console.error(error);
    next(error);  
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    let comment = await Comment.destroy({
      where : { id : req.params.id}
    });

    res.json(comment);

  } catch (error) {
    console.error(error);
    next(error);  
  }
});
module.exports = router;
