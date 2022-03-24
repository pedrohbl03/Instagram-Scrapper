const httpStatus = require('http-status');
const { Posts } = require('../global/globalVariables');

const getPostsController = async (req, res) => {
  res.send(JSON.stringify(Posts, null, 4));
}

module.exports = {
  getPostsController
}