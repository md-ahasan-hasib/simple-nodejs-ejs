require('./model');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/registrationDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, (err)=> {
    if(!err){
        console.log('Database connected');
    } else{
        console.log('Connection error' + err);
    }
});