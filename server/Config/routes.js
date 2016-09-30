//server side routes
var user = require('../controllers/Users.js');

module.exports = function(app){

	app.post('/register', user.register);		//route to db from client userFactory
	app.post('/login', user.login);
	app.use(userAuth);
	app.post('/profile', user.update);
	// app.get('/logout', user.logout);
	// app.get('/profile/:id',user.profile);
	// app.get('/search', user.getAll)
}
function userAuth(req,res,next){
  if (req.session.user){
    next();
  }else{
    res.sendStatus(401);
  }
}