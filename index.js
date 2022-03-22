const config = require('./src/config/AppConfig.js');
const routes = require('./src/routes/v1/index');
const express = require('express');
const cors = require('cors');
const cronJob = require('cron').CronJob;
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(express.static('public'))

app.use(cors());

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/v1', routes);

app.listen(config.port, () => console.log('listening on port ' + config.port));

const job = new cronJob('* * * * *', async () => {
  const resetAssets = await Promise.all(fs.unlink('./public/images'))
  console.log('Iniciando nova busca ...');
}, null, true, 'America/Sao_Paulo');

job.start(); 

