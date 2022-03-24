let { Posts } = require('../global/globalVariables');

const resetPosts = () => Posts.length = 0;

module.exports = { resetPosts };