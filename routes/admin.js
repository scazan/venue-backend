
var express = require("express"),
	passport = require("passport"),
	router = express.Router();

var ensureAuthenticated = (req, res, next) => {
	if(req.isAuthenticated() ) {
		next();
	}
	else {
		//req.flash("info", "You must be logged in");
		res.redirect("/admin/login");
	}
};

// Admin login page
router.get('/', ensureAuthenticated, function(req, res){
	res.send("<html><body>placeholder</body></html>");
});

// Login
router.get("/login", (req, res) => {
	res.send("login");
});

router.post("/login", passport.authenticate("login", {
	successRedirect: "/admin",
	failureRedirect: "/admin/login",
	failureFlash: true
}));

router.get("/admin/logout", (req, res) => {
	req.logout();
	res.redirect("/admin");
});

module.exports = router;
