const toJsonPosts = async ({ postsLinks }) => {
  let posts = []
  await postsLinks.forEach((postLink, index) => (
    posts.push({
        link: postLink,
        image: `https://localhost:3030/assets/images-${index}.png`
      })
  ))

  return posts
}

module.exports = toJsonPosts