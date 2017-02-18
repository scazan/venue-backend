
var express = require("express"),
	path = require("path"),
	legacyRoutes = require("./routes/legacy"),
	adminRoutes = require("./routes/admin"),
	mongoose = require("mongoose"),
	passport = require("passport"),
	bodyParser = require("body-parser"),
	cookieParser = require("cookie-parser"),
	session = require("express-session"),
	setupPassport = require("./modules/setupPassport");


var venueBackend = function(config) {
	mongoose.connect(config.db.connectionString);
	mongoose.connection.on('error', function(error) {
		console.log('Mongoose error:', error);
	});

	setupPassport();

	var app = express();

	app.use(passport.initialize());
	app.use(passport.session());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	// TODO: replace secret with a better solution
	app.use(session({
		secret: "TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX",
		resave: true,
		saveUninitialized: true
	}));

	app.set("port", config.server.port || 9001);

	app.use("/api/v1", legacyRoutes);
	app.use("/admin", adminRoutes);

	app.get('/', function(req, res){
		res.send("<html><body>Venue CMS</body></html>");
		//res.sendfile( path.join( __dirname, '../../dist/index.html' ) );
	});

	app.listen(app.get("port"), function() {
		console.log('Server started on ' + app.get("port") );
	});

	return app;
};

module.exports = venueBackend;
