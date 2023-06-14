'use strict';

const Controller = require('egg').Controller;

class NspController extends Controller {
  //这里是最终处理的函数
  async exchange() {
    const { ctx, app } = this;
    // 这里拿到 对应的 命名空间
    const nsp = app.io.of('/test');
    const message = ctx.args[0] || {};
    const socket = ctx.socket;
    const client = socket.id;

    try {
      const { target, payload } = message;
      if (!target) return;
      const msg = ctx.helper.parseMsg('exchange', payload, { client, target });
      nsp.emit(target, msg);
    } catch (error) {
      app.logger.error(error);
    }
  }
}

module.exports = NspController;
