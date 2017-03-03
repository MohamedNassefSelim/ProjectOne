var express = require('express');
var router = express.Router();
var Mcontroller = require('./controllers/Mcontroller');


//add routes


router.get('/', Mcontroller.getAllProjects);
router.get('/jopa',function(req,res){
  res.render("profile");
});

router.get('/test', Mcontroller.returnReg);
router.get('/login', Mcontroller.returnLogin);
router.post('/Post', Mcontroller.add);
router.post('/LPost', Mcontroller.Bring);

router.post('/project', Mcontroller.createProject);
//router.get('/test',Mcontroller.returnIndex);
//router.get('/', Mcontroller.getAllprojects);

//export router
module.exports = router;
