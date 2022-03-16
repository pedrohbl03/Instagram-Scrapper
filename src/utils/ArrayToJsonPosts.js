const toJsonPosts = async ({ postsLinks, postsImages }) => {
  let posts = []
  await postsLinks.forEach((postLink, index) => (
    posts.push({
        link: postLink,
        image: postsImages[index]
      })
  ))

  return posts
}

module.exports = toJsonPosts