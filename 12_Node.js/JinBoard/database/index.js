const { MongoClient } = require('mongodb');

// MongoDB 연결 설정하기
// DB 주소 찾는법: Database > Connect > Drivers
// const uri = "mongodb+srv://root:<password>@cluster0.0hislom.mongodb.net/?retryWrites=true&w=majority";

const { DB_ID, DB_PW } = process.env;
const url = `mongodb+srv://${DB_ID}:${DB_PW}@cluster0.0hislom.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);

const connect = async () => {
  try {
    await client.connect(); // MongoDB 서버에 연결
    console.log('몽고디비 연결 성공');
  } catch (err) {
    console.error('몽고디비 연결 에러', err);
  }
};

module.exports = { client, connect };