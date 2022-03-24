let { Posts } = require('../global/globalVariables')

const toJsonPosts = async ({ postsLinks }) => {
  await postsLinks.forEach((postLink, index) => (
    Posts.push({
        link: postLink,
        image: `https://localhost:3030/assets/images-${index}.png`
      })
  ))

  return Posts
}

module.exports = toJsonPosts