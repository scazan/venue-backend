
var express = require("express"),
	path = require("path"),
	legacyRoutes = require("./routes/legacy"),
	adminRoutes = require("./routes/admin"),
	mongoose = require("mongoose"),
	setupPassport = require("./modules/setupPassport");


var venueBackend = function(config) {
	mongoose.connect(config.db.connectionString);
	mongoose.connection.on('error', function(error) {
		console.log('Mongoose error:', error);
	});

	setupPassport();

	var app = express();

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
