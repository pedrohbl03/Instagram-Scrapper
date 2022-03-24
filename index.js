const express = require('express');
const cors = require('cors');
const cronJob = require('cron').CronJob;
const bodyParser = require('body-parser');

const config = require('./src/config/AppConfig.js');
const routes = require('./src/routes/v1/index');


const { readAssets, removeAssets } = require('./src/utils/assets');
const { getUserService } = require('./src/services/user.service')
const { getPagePosts } = require('./src/services/posts.service');
const { resetPosts } = require('./src/utils/resetPosts')

let { User } = require('./src/global/globalVariables');

const app = express();

app.use(express.static('public'));

app.use(cors());

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/v1', routes);

app.listen(config.port, () => console.log('listening on port ' + config.port));

const job = new cronJob('30/30 * * * * *', async () => {
  let { user, hashtag } = getUserService();

  resetPosts();

  const assets = await readAssets();
  assets.map(async (asset) => await removeAssets(asset))
  
  console.log('Iniciando nova busca ...');
  getPagePosts(user, hashtag);

}, null, true, 'America/Sao_Paulo');

job.start();

