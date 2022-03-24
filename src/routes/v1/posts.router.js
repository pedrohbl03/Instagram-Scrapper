const express = require('express');
const { getPostsController } = require('../../controllers/posts.controller');

const router = express.Router();

router.get('/get', (req, res) => getPostsController(req, res))

module.exports = router;