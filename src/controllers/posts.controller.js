const httpStatus = require('http-status');
const { getPagePosts } = require('../services/posts.service')

const setUserController = async (req, res) => 
  res.status(httpStatus.CREATED).send('User set: ' + JSON.stringify(req.body));

const getPostsController = async (req, res) => {
  const posts = await getPagePosts('pedro.limaa_', 'sitecefa')
  res.send(JSON.stringify(posts, null, 4));
}

module.exports = {
  setUserController,
  getPostsController
}