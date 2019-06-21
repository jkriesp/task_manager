require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5cf797fef7e0c4de6e4b9a5a').then((task) => {
//   console.log(task)
//   return Task.countDocuments({completed: false})
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments( {completed: false} )
  return count
} 

deleteTaskAndCount('5cf79b700ecfe2df89d2e390').then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})