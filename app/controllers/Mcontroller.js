let project = require('../models/project');
let student = require('../models/student');
let work = require('../models/work');
let Mcontroller ={
  getAllProjects:function(req, res){

        project.find(function(err, projects){

            if(err)
                res.send(err.message);
            else
                res.render('index', {projects,msg: ""});
        })
    },

    createProject:function(req, res){
        let project = new project(req.body);

        project.save(function(err, project){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                console.log(project);
                res.redirect('/');
            }
        })
    },
    add:function(req, res){
  let Student = new student(req.body);
  Student.save(function(err,Student){
    if(err){
      res.send(err.message);
      console.log(err);
    }else{  console.log(Student);
      res.render('index',{msg: 'Reg Success'});}


  })
},
add2:function(req, res){
let Pro = new project(req.body);
Pro.save(function(err,Project){
if(err){
  res.send(err.message);
  console.log(err);
}else{  console.log(Project);
  res.send("portfolio made");}


})
},
    returnReg:function(req, res){

      res.render('reg');
    },

        returnLogin:function(req, res){

          res.render('login');
        },

Bring:function(req , res){
  student.findOne({ Username: req.body.Username,Password: req.body.Password }, function(err, User) {
if(err){
  res.send(err.message)
  console.log(err.message);
}if(!User){
  res.send('login failed');

}else{
  console.log(User);
  res.render("loginSucc");
}

});
  //if(req.body.Username == collection.find.{ Username: req.body.Username,Password: req.body.Password })
}
}



module.exports = Mcontroller;
