require('../src/db/mongoose')
const User = require('../src/models/user')

// 5cf7b39c8dec98ebbc187b50

User.findByIdAndUpdate('5cf8e8958d5704120a0d2274', {age: 1}).then((user) => {
  console.log(user)
  return User.countDocuments({ age: 1})
}).then((result) => {
  console.log(result)
}).catch((e) => {
  console.log(e)
})