
var app = require("../venue.js"),
	supertest = require("supertest"),
	chai = require("chai")
	expect = chai.expect;

describe("JSON response", function() {
	var request;
	beforeEach(function() {
		request = supertest(app)
			.get("/api/events")
			.set("Accept", "application/json");
	});


	it("returns a JSON type", function(done) {
		request.expect("Content-Type", /json/)
			.expect(200)
			.end(done);
	});
});
