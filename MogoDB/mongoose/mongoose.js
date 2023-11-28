const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017');
const validator = require('validator');

const { Schema } = mongoose;

const userSchema = new Schema({
  name:{
    type: String,
  },
  email: {
    type: String,
    required:true,
    validate:{
      validator:function (value) {
        if(!validator.isEmail(value))
        throw new Error('This is not Email')
      }
    }
  },
  password: {
    type: String,
    required:true,
    trim: true,
  },
  age: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model('User', userSchema);

// const newUser = new User({ 
//   name: '철수',
//   email:'철수@gmail.com', 
//   password: '     abcde', 
// });

// newUser.save().then(value=>console.log('value is', value));

User.find({name: '철수'}).select('name -_id').then((value) => console.log('all data', value))