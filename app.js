const express = require("express");
const app = express();

app.set("view engine", "ejs");

// RESTful Routes
app.get("/", (req, res) => {
	res.render("pages/landing");
});

app.get("/players", (req, res) => {
	const players = [
		{name: "Arlandor", styles: ""},
		{name: "DKP", styles: ""},
	];

	res.render("pages/players", {players:players});
});

app.listen(3000, () => {
	console.log("Starting app...");
});
