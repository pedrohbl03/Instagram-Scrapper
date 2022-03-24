const fs = require('fs');
const https = require('https');

const removeAssets = async (assets) => fs.unlink(`./public/images/${assets}`, (error) => {
  if (error) throw error 
})

const readAssets = async () => fs.readdirSync('./public/images')

const getAssets = (url, destination) => new Promise((resolve, reject) => {
  const file = fs.createWriteStream(destination);

  https.get(url, response => {
    response.pipe(file);

    file.on('finish', () => {
      file.close(resolve(true));
    });
  }).on('error', error => {
    fs.unlink(destination);

    reject(error.message);
  });
});

module.exports = {
  removeAssets,
  readAssets,
  getAssets
}