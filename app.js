const express = require("express");
const app = express();

app.set("view engine", "ejs");

// RESTful Routes
app.get("/", (req, res) => {
	res.render("pages/landing");
});

app.listen(3000, () => {
	console.log("Starting app...");
});
