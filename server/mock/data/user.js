var Mock = require('mockjs')

exports.LoginUsers = function(){
  return{
    id: "11223344",
    user_name: 'admin',
    password: '123456',
    nickname: 'nickname',
    avatar: '/assets/images/user.png',
    name: 'admin'
  }
}

exports.Users=function(){
  const Users = [];

  for (let i = 0; i < 86; i++) {
    Users.push(Mock.mock({
      id: Mock.Random.guid(),
      name: Mock.Random.cname(),
      addr: Mock.mock('@county(true)'),
      'age|18-60': 1,
      birth: Mock.Random.date(),
      sex: Mock.Random.integer(0, 1)
    }));
  }
  return Users
}

exports.adminUsers=function(){
  const adminUsers = [];
  for (let i = 0; i < 86; i++) {
    adminUsers.push(Mock.mock({
      id: Mock.Random.guid(),
      role_id: '',
      password: '',
      user_name: Mock.Random.name(),
      nickname: Mock.Random.cname(),
      status: Mock.Random.integer(0, 1)
    }));
  }
  adminUsers.push(this.LoginUsers())
  return adminUsers
}

// module.exports = {}
