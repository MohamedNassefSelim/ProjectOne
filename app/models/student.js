var mongoose = require ('mongoose');

var StudentSchema = mongoose.Schema({

 Username: {
   type:String,
   required : true,
   unique:true },

   Password: {
     type:String,
     required : true,

   }})
   var student = mongoose.model("student", StudentSchema);

   module.exports = student;
   
