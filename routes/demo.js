const router = require('koa-router')()//路由
const Mock = require('mockjs') //引入mockjs  
const Random = Mock.Random;  //引入mockjs生成随机属性的函数
const  swagger = require('./swagger1')
// 下面的路由通过swagger脚本复制而来
router.get('/demo', async (ctx, next) => {
  ctx.body = swagger
}),
  router.get('/large/screen/sync_screen', async (ctx, next) => {
    ctx.body = await Mock.mock({
      code: '200',
      'data': Random.boolean(), //无注释
      message: '成功',
    })
  }),
  router.post('/AfEmergency/deleteEmergencySupplies', async (ctx, next) => {
    ctx.body = await Mock.mock({
      code: '200',
      'data': Random.boolean(), //无注释
      message: '成功',
    })
  }),
  router.get('/large/screen/cancel_menu_report', async (ctx, next) => {
    ctx.body = await Mock.mock({
      code: '200',
      'data': {
        'data': {
          'enable': Random.csentence(3, 5), //是否开启
          'fictitiousUserId': Random.integer(), //虚拟屏幕用户id
          'fictitiousUserName': Random.csentence(3, 5), //虚拟屏幕用户姓名
          'menuId': Random.integer(), //菜单id
          'name': Random.csentence(3, 5), //菜单专题名称
          'path': Random.csentence(3, 5), //菜单路径
          'sort': Random.integer(), //排序
          'titleList|5-15': [{
            'name': Random.csentence(3, 5), //专题名称
            'page': {
              'enableVideo': Random.csentence(3, 5), //需要视频控件
              'icon': Random.csentence(3, 5), //页面图标
              'id': Random.integer(), //页面id
              'name': Random.csentence(3, 5), //页面名称
              'path': Random.csentence(3, 5), //页面路径
              'reportDate': Random.csentence(3, 5), //发布时间
              'reportId': Random.integer(), //发布id
              'status': Random.csentence(3, 5), //状态
              'type': Random.csentence(3, 5), //页面属性 1 主页 2 分屏 3 虚拟盘
              'userId': Random.csentence(3, 5), //用户id
              'userName': Random.csentence(3, 5), //用户名称
            },
            'sort': Random.integer(), //排序
            'titleId': Random.integer(), //专题id
            'type': Random.csentence(3, 5), //菜单专题类型 1 为菜单，2 为专题(发布不用传递)
            'userId': Random.integer(), //授权用户id
            'userName': Random.csentence(3, 5), //授权用户姓名
          },], // 专题数组
          'type': Random.csentence(3, 5), //菜单专题类型 1 为菜单，2 为专题
          'userId': Random.integer(), //主屏用户id
          'userName': Random.csentence(3, 5), //主屏用户姓名
        },
        message: '成功',
        'result': Random.boolean(), //无注释
      },
      message: '成功',
    })
  })
module.exports = router //注意抛出。三引入一抛出在新建文件时必须有，路由则可以由swagger脚本生成或自己写
