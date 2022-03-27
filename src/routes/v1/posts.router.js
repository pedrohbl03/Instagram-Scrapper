const express = require('express');
const { getPostsController, setPostsController } = require('../../controllers/posts.controller');

const router = express.Router();

router.get('/get', (req, res) => getPostsController(req, res))
router.get('/set', (req, res) => setPostsController(req, res))

module.exports = router;