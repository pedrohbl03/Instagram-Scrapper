let { User } = require('../global/globalVariables')

const setUserService = (user, hashtag) => {
  User = {
    user,
    hashtag
  }
}

const getUserService = () => User

module.exports = {
  setUserService,
  getUserService
}


