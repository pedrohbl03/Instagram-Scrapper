const puppeteer = require('puppeteer');
const toJsonPosts = require('../utils/ArrayToJsonPosts')

const getPageToSearch = async (hashtag) => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage();
  await page.goto(`https://www.instagram.com/explore/tags/${hashtag}/`)
  return page;
}

const getPagePosts = async (user, hashtag) => {
  const page = await getPageToSearch(hashtag);

  const postsLinks = await page.$$eval(('.v1Nh3 a'), elements => {
    return elements.map(post => post.href);
  });
  const postsImages = await page.$$eval(('.v1Nh3 a .eLAPa .KL4Bh img'), elements => {
    return elements.map(post => post.src);
  });
  /* await page.close(); */

  const posts = await toJsonPosts({ postsLinks, postsImages });

  return posts;
}





module.exports = {
  getPagePosts,
  toJsonPosts
}