const download = require('../utils/downloadFunction');
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

  await page.waitForSelector('.v1Nh3 a');
  const postsLinks = await page.$$eval(('.v1Nh3 a'), elements => elements.map(post => post.href));
  const postsImages = await page.$$eval(('.v1Nh3 a .eLAPa .KL4Bh img'), elements => elements.map(post =>post.src ));

  const localImages = await Promise.all(postsImages.map(async (post, index) => await download(post, `./public/images/images-${index}.png`)));
  
 /*  await page.close(); */

  const posts = await toJsonPosts({ postsLinks });

  return posts;
}


module.exports = {
  getPagePosts,
  toJsonPosts
}