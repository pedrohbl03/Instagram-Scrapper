const express = require('express');
const { getUserController, setUserController } = require('../../controllers/user.controller');

const router = express.Router();

router.get('/get', (req, res) => getUserController(req, res))
router.post('/set', (req, res) => setUserController(req, res))

module.exports = router;