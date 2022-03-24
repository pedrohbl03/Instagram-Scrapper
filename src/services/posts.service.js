const { getAssets } = require('../utils/assets');
const puppeteer = require('puppeteer');
const toJsonPosts = require('../utils/ArrayToJsonPosts')

const getPageToSearch = async (hashtag) => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage();
  await page.goto(`https://www.instagram.com/explore/tags/${hashtag}/`)
  return { page, browser };
}


const getPagePosts = async (user, hashtag) => {
  const { page, browser } = await getPageToSearch(hashtag);

  await page.waitForSelector('.v1Nh3 a');
  const postsLinks = await page.$$eval(('.v1Nh3 a'), elements => elements.map(post => post.href));
  const postsImages = await page.$$eval(('.v1Nh3 a .eLAPa .KL4Bh img'), elements => elements.map(post =>post.src ));

  await Promise.all(postsImages.map(async (post, index) => await getAssets(post, `./public/images/images-${index}.png`)));
  
  await page.close();
  await browser.close();

  const posts = await toJsonPosts({ postsLinks });

  return posts
}


module.exports = {
  getPagePosts,
  toJsonPosts
}