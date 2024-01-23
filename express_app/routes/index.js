var express = require('express'); // inport express framework
var router = express.Router();  
// creates an instance of express router

// HTTP GET method at the root path ("/")
router.get('/', (req, res, next) => {
  console.log('Index page requested')
  res.render('index', { title: "Corina's First Express App" }); // renders index view, passes in a title
});


module.exports = router;
