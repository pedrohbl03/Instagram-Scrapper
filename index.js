const config = require('./src/config/AppConfig.js');
const routes = require('./src/routes/v1/index');
const express = require('express');
const cronJob = require('cron').CronJob;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/v1', routes);

app.listen(config.port, () => console.log('listening on port ' + config.port));

/* const job = new cronJob('* * * * *', () => {
  console.log('Iniciando nova busca ...');
}, null, true, 'America/Sao_Paulo');

job.start(); */


/* 16:30 Start - 19:30 End */
/* 15:00 Start - 17:57 End */
/* 16:22 Start - 20:00 End */
/* 18:50 Start - 21:07 End */