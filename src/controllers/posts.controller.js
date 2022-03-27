const httpStatus = require('http-status');
const { Posts, User } = require('../global/globalVariables');
const { getPagePosts } = require('../services/posts.service');

const getPostsController = async (req, res) => {
  res.status(httpStatus.OK).send(JSON.stringify(Posts, null, 4));
}

const setPostsController = async (req, res) => {
  let { user, hashtag } = User
  await getPagePosts(user, hashtag);
  res.status(httpStatus.CREATED).send('POSTS SETADOS.');
}

module.exports = {
  getPostsController,
  setPostsController
}