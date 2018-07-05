
// const Mock = require('mockjs')
const userMock = require('../../mock/data/user')

/*router.get('/userlist', async function (ctx, next) {
let _Users = userMock.Users();
  ctx.body = await _Users;
})
module.exports = router*/

let _AdminUsers = userMock.adminUsers();
exports.adminUsersList = async function (ctx, next) {
  console.log(ctx.request.body);
  let {page, user_name} = ctx.request.body;
  let mockUsers = _AdminUsers.filter(user => {
    if (user_name && user.user_name.indexOf(user_name) == -1) return false;
    return true;
  });
  let total = mockUsers.length;
  mockUsers = mockUsers.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
  let datas = {
    total: total,
    items: mockUsers
  };
  let result = {
    status: 200,
    msg: '添加成功',
    datas: JSON.stringify(datas)
  };

  ctx.body = await result
};

