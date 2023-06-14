'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);

  // socket.io 监听前端使用 http://127.0.0.1:7001/test 这个命名空间   后面的route 中的exchange 相当于 前端的emit 发射的事件类型
  io.of('/test').route('exchange', io.controller.nsp.exchange);
};
