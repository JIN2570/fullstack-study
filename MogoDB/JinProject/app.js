const {MongoClient} = require('mongodb');
const uri =`mongodb://127.0.0.1:27017`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db('firstDB')
  const users = database.collection('users')

  // const userData = await users.insertOne({name: 'JIN', age: 17});
  // console.log('result', userData);

  // const userList = [{name: '철수', age: 30},{name: 'jessica', age: 25} ]
  // const userListResult = await users.insertMany(userList);
  // console.log('result', userListResult);
  
  // const findUser = await users.find({age:{$gt: 20}}).toArray();
  // console.log('result', findUser);

  // const updateUser = await users.updateOne({name: 'JIN'},{$set:{age:18}});
  // console.log('fff', updateUser);

  // const deleteUser = await users.deleteMany({age:{$gt:20}});
  // console.log('dddd', deleteUser);

  const userData = await users.find({name: 'JIN'}).project({name:1, _id:0}).toArray();
  console.log('userdata', userData);
};  
run();
 