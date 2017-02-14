
var app = require("../venue.js"),
	supertest = require("supertest"),
	chai = require("chai")
	expect = chai.expect;

describe("Legacy API", function() {
	var request;
	beforeEach(function() {
		request = supertest(app)
			.get("/api/v1/events")
			.set("Accept", "application/json");
	});


	it("returns a JSON type", function(done) {
		request.expect("Content-Type", /json/)
			.expect(200)
			.end(done);
	});

	it("returns a JSON array", function(done) {
		request.expect( function(res) {
			if(!Array.isArray(res.body) ) {
				throw new Error("response was not an array");
			}
		})
		.end(done);
	});
});
