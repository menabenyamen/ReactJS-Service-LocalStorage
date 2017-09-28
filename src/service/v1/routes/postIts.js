const express = require('express');

const postItsController = require('../controllers/postIts');

const router = express.Router();

router.get('/', postItsController.getAll);
router.get('/:id', postItsController.get);
router.delete('/:id', postItsController.remove);
router.post('/', postItsController.add);
router.put('/:id', postItsController.update);

module.exports = router;
