var express = require('express');
var Comment = require('../schemas/comment');

var router = express.Router();

router.get('/:id', async (req, res, next) => {
  try {
    let comments = await Comment.find({
      commenter : req.params.id      
    }).populate('commenter');
    res.json(comments);

  } catch(error) {
    console.error(error);
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    let comment = new Comment({
      commenter : req.body.id,
      comment : req.body.comment,
    });
    const result = Comment.populate(await comment.save(), {path : 'commenter'});
    res.status(201).json(result);

  } catch (error) {
    console.error(error);
    next(error);  
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    let comment = await Comment.update({ _id : req.body.id }, { comment : req.body.comment});
    res.status(201).json(comment);

  } catch (error) {
    console.error(error);
    next(error);  
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    let comment = await Comment.remove({
       _id : req.params.id
    });

    res.json(comment);

  } catch (error) {
    console.error(error);
    next(error);  
  }
});
module.exports = router;
