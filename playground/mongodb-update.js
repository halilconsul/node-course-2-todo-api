// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Error');
  }


  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('656565sad6565ad')
  }, {
    $set: {
      name: 'Joe'
    },
    // increment by 1
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then(result => {
    console.log(result);
  });
  // db.close();
});
