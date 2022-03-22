const express = require('express');
const { getPostsController, setUserController } = require('../../controllers/posts.controller');

const router = express.Router();

router.get('/get', (req, res) => getPostsController(req, res))
router.post('/set', (req, res) => setUserController(req, res))

module.exports = router;