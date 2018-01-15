const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Error');
  }
  console.log('Connected');

  // db.collection('Todos').find({completed:false}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Error', err);
  // });
  //
  // db.collection('Todos').find().count().then(count => {
  //   console.log(count);
  // }, err => {
  //   console.log(err);
  // });

  db.collection('Users').find({name:'Andrew'}).toArray().then(res => {
    console.log(JSON.stringify(res, undefined, 5));
  }, err => {
    console.log(err);
  })

  // db.close();
});
