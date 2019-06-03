// CRUD  create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  // db.collection('users').findOne({ _id: new ObjectID("5cee6370c80a6a559512655a")}, (error, user) => {
  //   if (error) {
  //     return console.log('Unable to fetch')
  //   }

  //   console.log(user)
  // })

  // db.collection('users').find({ age: 30 }).toArray((error, users) => {
  //   console.log(users)
  // })

  db.collection('tasks').findOne({ _id: new ObjectID("5cee64a9a0c4b756a6ccd06a")}, (error, document) => {
    if (error) {
      return console.log('Cannot find document!')
    }

    console.log(document)
  })

  db.collection('tasks').find({ completed: false}).toArray((error, documents) => {
    if (error) {
      return console.log('Cannot find documents')
    }

    console.log(documents)
  })

})