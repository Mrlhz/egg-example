'use strict';

const path = require('path');
/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
  ua: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-ua'),
  },
  validate: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-validate'),
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
};
