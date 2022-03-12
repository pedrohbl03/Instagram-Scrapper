const httpStatus = require('http-status');
const { getPagePosts } = require('../services/puppeteer.service')

const setUserController = async (req, res) => {
  res.status(httpStatus.CREATED).send('User set: ' + JSON.stringify(req.body));
}

const getUserController = async (req, res) => {
  const posts = await getPagePosts('pedro.limaa_', 'sitecefa')
  res.send(posts);
}

module.exports = {
  setUserController,
  getUserController
}