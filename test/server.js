
var config = require("../config.js");
	var app = require("../venue-backend.js")(config),
	supertest = require("supertest"),
	chai = require("chai")
	expect = chai.expect;

describe("Homepage", function() {
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

describe("Admin main page", function() {
	var request;
	beforeEach(function() {
		request = supertest(app)
			.get("/admin")
			.set("Accept", "text/html");
	});


	it("returns a forbidden status when not logged in", function(done) {
		request.expect(403)
			.end(done);
	});
});

describe("Admin login page", function() {
	var request;
	beforeEach(function() {
		request = supertest(app)
			.post("/admin/login")
			.set("Accept", "text/html");
	});


	it("returns a forbidden status when not logged in and not sending Username or password", function(done) {
		request.expect(403)
			.end(done);
	});
});

describe("Admin logout page", function() {
	var request;
	beforeEach(function() {
		request = supertest(app)
			.post("/admin/logout")
			.set("Accept", "text/html");
	});


	it("returns an OK status when logging out", function(done) {
		request.expect(200)
			.end(done);
	});

});

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
