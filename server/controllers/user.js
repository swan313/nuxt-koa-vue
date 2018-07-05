/**
 * Created by delia on 2018/6/26.
 */

/*const router = require('koa-router')()
const userMock = require('../mock/data/user')

router.get('/userlist', async function (ctx, next) {
  /!*ctx.body = [
    {
      name:'yipeng', age: '29'
    },
    {
      name:'yihang', age: '18'
    }
  ]*!/

  /!*ctx.body = Mock.mock({
    'list|1-10': [{
      'name': Mock.Random.region()
    }]
  });*!/
  ctx.body = userMock.Users();
})
module.exports = router*/


const router = require('koa-router')()
const koaBody = require('koa-body')
// const auth = require('../routes/prod/auth')
const auth = require('../routes/dev/auth')

router.post('/adminUsersList',koaBody(), auth.adminUsersList);

module.exports = router



