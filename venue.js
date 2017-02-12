
var express = require("express"),
	path = require("path"),
	legacyRoutes = require("./routes/legacy"),
	mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/dogstarorchestra");

var app = express();

app.set("port", process.env.PORT || 9001);

app.use(legacyRoutes);

app.listen(app.get("port"), function() {
	console.log('Server started on ' + app.get("port") );
});


module.exports = app;
