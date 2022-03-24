const httpStatus = require('http-status');
const { setUserService, getUserService } = require('../services/user.service')

const setUserController = async (req, res) => {
  let { user, hashtag } = req.body
  setUserService(user, hashtag)
  res.status(httpStatus.CREATED).send('User set: ' + JSON.stringify(req.body));
}

const getUserController = async (req, res) => {
  res.status(httpStatus.OK).send(JSON.stringify(getUserService()));
}
  


module.exports = {
  setUserController,
  getUserController
}