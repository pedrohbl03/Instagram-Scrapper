const puppeteer = require('puppeteer')

const getPageToSearch = async (hashtag) => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage();
  await page.goto(`https://www.instagram.com/explore/tags/${hashtag}/`)

  return page
}

const getPagePosts = async (user, hashtag) => {
  const page = await getPageToSearch(hashtag);
  const allPosts = await page.$$eval(('.v1Nh3'), elements => {
    return elements.map(post => post.innerHTML)
  })

  return allPosts
}



module.exports = {
  getPagePosts
}