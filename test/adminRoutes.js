
var app = require("../venue.js"),
	supertest = require("supertest"),
	chai = require("chai")
	expect = chai.expect;

describe("Admin routes", function() {
	var request;
	beforeEach(function() {
		request = supertest(app)
			.get("/admin")
			.set("Accept", "text/html");
	});


	it("returns an HTML page redirect when not logged in", function(done) {
		request.expect("Content-Type", /html/)
			.expect(302)
			.end(done);
	});
});
