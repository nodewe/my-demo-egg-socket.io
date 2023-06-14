'use strict';

// had enabled by egg
// exports.static = true;

//添加socket.io 插件
exports.io = {
  enable: true,
  package: 'egg-socket.io',
};

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.redis = {
  enable: true,
  package: 'egg-redis',
};
