var express = require('express');
var router = express.Router();

/* GET users listing. */
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
module.exports = router;
