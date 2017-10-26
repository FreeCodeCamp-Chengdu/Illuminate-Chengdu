'use strict';

const AV = require('leanengine');
const Router = require('koa-router');

const router = new Router({prefix: '/works'});

const Work = AV.Object.extend('Works');

router.get('/', async function(ctx) {
    const workQuery = new AV.Query(Work);
    try {
      ctx.response.body = await workQuery.find();
    } catch (err) {
      if (err.code === 101) {
        // 该错误的信息为：{ code: 101, message: 'Class or object doesn\'t exists.' }，说明 数据表还未创建，所以返回空的列表。
        // 具体的错误代码详见：https://leancloud.cn/docs/error_code.html
        ctx.response.body = [];
      } else {
        throw err;
      }
    }
  });
  
  // 新增项目
  router.post('/', async function(ctx) {
    const data = ctx.request.body.data;
    var work = new Work();
    console.log(data);
    data.map(function (prop) {
        work.set(prop.name, prop.value)
    });
    await work.save();
    ctx.response.body= "it is OK!";
  });
  
  module.exports = router;