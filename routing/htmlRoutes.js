// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;
var path = require('path');
var friends = require('../app/data/friends.js');
var totalDifference = 0;


// Arrays for answers
var answers = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Routing
app.get("/public/survey", function(req, res){
	res.sendFile(path.join(__dirname, '../public/survey.html'))
});

// Need to store the answers from /public/survery into answers array
app.post("/public/survey", function (req, res){
	var friend = req.body;
	answers.push(friend);
	comparison();
	// console.log(answers);
	res.end();
});
// Match that with the friends from app/data/friends.js
// Display information in Module

// App listening
app.listen(PORT, function(){
	console.log("App is listening on POT " + PORT);
});

function comparison(){
	console.log(answers);
	for (var i = 0; i < friends.length; i++) {
		console.log(friends[i].scores);
	}
}



