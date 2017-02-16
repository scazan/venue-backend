
var express = require("express"),
	passport = require("passport"),
	router = express.Router();

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

router.post("/login", passport.authenticate("login", {
	successRedirect: "/admin",
	failureRedirect: "/admin/login",
	failureFlash: true
}));

router.post("/logout", function(req, res) {
	req.logout();
	res.sendStatus(200);
});

module.exports = router;
