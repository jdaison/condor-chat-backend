const glob = require('glob');
const path = require('path');

module.exports = function (app) {
  glob
    .sync('./src/routes/**/*.js', {
      ignore: ['./src/routes/**/index.js', './src/routes/**/**.test.js'],
    })
    .forEach((file) => {
      require(path.resolve(file))(app);
    });
};
