const httpStatus = require('http-status');

const setUserController = async (req, res) => {
  res.send(JSON.stringify(req.body));
}

const getUserController = async (req, res) => {
  res.send('Lorem Ipsum');
}

module.exports = {
  setUserController,
  getUserController
}