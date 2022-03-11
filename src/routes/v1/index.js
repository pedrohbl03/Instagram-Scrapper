const express = require('express');
const userRouter = require('./user.router.js')

const router = express.Router();

const userRoutes = [
  {
    path: '/user',
    route: userRouter
  }
];

userRoutes.forEach((route) => {
  router.use(route.path, route.route)
})


module.exports = router;