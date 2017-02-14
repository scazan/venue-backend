
var express = require("express"),
	config = require("./config"),
	path = require("path"),
	legacyRoutes = require("./routes/legacy"),
	mongoose = require("mongoose");


mongoose.connect(config.db.connectionString);

var app = express();

app.set("port", config.server.port || 9001);

app.use(legacyRoutes);

app.listen(app.get("port"), function() {
	console.log('Server started on ' + app.get("port") );
});


module.exports = app;
