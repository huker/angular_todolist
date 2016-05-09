var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/todolist');

module.exports=mongoose.model('todo',mongoose.Schema({
    text:String
}));