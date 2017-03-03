var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    URL:String
})

var Project = mongoose.model("project", projectSchema);

module.exports = Project;
