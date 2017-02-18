
var express = require("express"),
	passport = require("passport"),
	router = express.Router(),
	User = require("../models/user");

var ensureAuthenticated = function(req, res, next) {
	if(req.isAuthenticated() ) {
		next();
	}
	else {
		//req.flash("info", "You must be logged in");
		//res.redirect("/admin/login");
		res.sendStatus(403);
	}
};

// Admin login page
router.get('/', ensureAuthenticated, function(req, res){
	res.send("<html><body>placeholder</body></html>");
});

router.post("/login", passport.authenticate("login"), function(req, res) {
	res.sendStatus(403);
});

router.post("/logout", function(req, res) {
	req.logout();
	res.sendStatus(200);
});


router.post("/signup", (req, res, next) => {
	var username = req.body.username,
		password = req.body.password;

	User.findOne({ username: username }, (err, user) => {
		if(err) {
			return next(err);
		}

		if(user) {
			//req.flash("error", "User already exists");

			return res.sendStatus(200);
		}

		var newUser = new User({
			username: username,
			password: password
		});

		newUser.save(next);
	});
}, passport.authenticate("login", {
	session: true
}));


module.exports = router;
