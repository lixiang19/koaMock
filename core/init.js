
const requireDirectory = require('require-directory');
const Router = require('koa-router');

class InitManager {
  static initCore(app) {

    InitManager.app = app;
    InitManager.initLoadRouters();
  }
  static initLoadRouters() {

    const apiDirectory = `${process.cwd()}/routes`
    console.log("InitManager -> initLoadRouters -> apiDirectory", apiDirectory)
    const modules = requireDirectory(module, apiDirectory, {
      visit: whenLoadModule
    });
    function whenLoadModule(obj) {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes())
      }
    }
  }
}

module.exports = InitManager;