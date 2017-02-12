var express = require("express"),
	router = express.Router();

// Models
var Event = require("../models/event");

// All calendar events
router.get('/api/events', function(req, res){
	Event.find()
		.exec(function(err, events) {
			if(err) { return next(err); }

			res.json(events);
		});
});


router.get('/', function(req, res){
	res.send("<html><body>placeholder</body></html>");
	//res.sendfile( path.join( __dirname, '../../dist/index.html' ) );
});


module.exports = router;
