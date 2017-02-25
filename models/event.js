
var mongoose = require("mongoose");

var eventSchema = mongoose.Schema({
	address: { type: String },
	address2: { type: String },
	amComposer: { type: Boolean },
	city: { type: String },
	country: { type: String },
	date: { type: String },
	location: { type: String },
	longDescription: { type: String },
	piece: { type: String },
	price: { type: String },
	state: { type: String },
	time: { type: String },
	title: { type: String },
	venue: { type: String },
	zip: { type: String }
});

var Event = mongoose.model("events", eventSchema);

module.exports = Event;
