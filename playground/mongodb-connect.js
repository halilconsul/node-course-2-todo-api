const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Error');
  }
  console.log('Connected');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('oops smth went wrong', err);
  //   }
  //
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // })

  db.collection('Users').insertOne({
    name: 'John',
    age: 36,
    location: 'LA'
  }, (err, res) => {
    if (err) {
      console.log('OOps smth went wrong', err);
    }
    console.log(JSON.stringify(res.ops, undefined, 2));
  });

  db.close();
});
