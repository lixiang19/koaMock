const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')
const SwaggerParser = require("@apidevtools/swagger-parser");
const InitManager = require('./core/init');

SwaggerParser.validate('https://apitools.dev/swagger-parser/online/sample/swagger.yaml', (err, api) => {
  if (err) {
    console.error(err);
  }
  else {
    console.log("API name: %s, Version: %s", api.paths);
  }
});
// error handler  
onerror(app)
// middlewares  
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(cors())
app.use(json())
app.use(logger())

// logger  
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
// 这里自动注册路由了。routes下的js文件会被自动注册
InitManager.initCore(app);
// error-handling  
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});
module.exports = app  