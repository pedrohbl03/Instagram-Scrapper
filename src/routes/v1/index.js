const express = require('express');
const userRouter = require('./user.router.js')
const postsRouter = require('./posts.router.js')

const router = express.Router();

const userRoutes = [
  {
    path: '/user',
    route: userRouter
  }
];

const postsRoutes = [
  {
    path: '/posts',
    route: postsRouter
  }
];

userRoutes.forEach((route) => {
  router.use(route.path, route.route)
});

postsRoutes.forEach((route) => {
  router.use(route.path, route.route)
});


module.exports = router;