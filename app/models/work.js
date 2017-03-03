var mongoose = require('mongoose');

var workSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    URL:String
})

var work = mongoose.model("work", workSchema);

module.exports = work;
