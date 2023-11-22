const {MongoClient} = require('mongodb');
const uri =`mongodb://127.0.0.1:27017`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db('firstDB');
  const users = database.collection('users');

  // const userDate = await users.insertOne({name: 'Jin', age: 28})
  // console.log('result', userDate);

  // const userList = [{name: '철수', age: 30}, {name: 'jessica', age: 25}]
  // const userListResult = await users.insertMany(userList)
  // console.log('result', userListResult);

  // const findUser = await users.findOne({age:{$gt:20}});
  // console.log('result', findUser);

  // const updateUser = await users.updateOne({name: 'Jin'}, {$set:{age: 29}})
  // console.log('fff', updateUser);

  // const deletUsers = await users.deleteMany({age:{$gt:28}});
  // console.log('ddd', deletUsers);

  const userData = await users. find({name: 'Jin'}).project({name: 1, _id: 0}).toArray();
  console.log('userdata', userData);
}
run();