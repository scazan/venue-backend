var express = require("express"),
	router = express.Router();

// Models
var Event = require("../models/event");

// All calendar events
router.get('/events', function(req, res){
	Event.find()
		.exec(function(err, events) {
			if(err) { return next(err); }

			res.json(events);
		});
});




module.exports = router;
