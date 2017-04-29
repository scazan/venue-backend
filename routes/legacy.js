var express = require("express"),
	router = express.Router();

// Models
var Event = require("../models/event");

// All calendar events
router.get('/events', function(req, res){
	Event.find({postStatus: "published"})
		.exec(function(err, events) {
			if(err) { return next(err); }

			res.json(events);
		});
});


router.get('/works', function(req, res){
	res.json({});
});


module.exports = router;
