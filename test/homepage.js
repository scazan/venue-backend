
var app = require("../venue.js"),
	supertest = require("supertest"),
	chai = require("chai")
	expect = chai.expect;

describe("HTML response", function() {
	var request;
	beforeEach(function() {
		request = supertest(app)
			.get("/")
			.set("Accept", "text/html");
	});


	it("returns an HTML page", function(done) {
		request.expect("Content-Type", /html/)
			.expect(200)
			.end(done);
	});
});
