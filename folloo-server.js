var express 				= require("express"),
	app 					= express(),
	FirebaseTokenGenerator 	= require("firebase-token-generator"),
	tokenGenerator 			= new FirebaseTokenGenerator("wlGIQ7r7OcsDABHDAjxxyBze5nYO8BXCKod5JQJI");

app.get('/authToken', function(req, res){
   console.log("Received request: " + req);
   var token = tokenGenerator.createToken({uid: "YYYYYYYY", some: "arbitrary", data: "here"});
   console.log("Token: " + token);
   res.json(token);
});

app.listen(3000, function() {
	console.log("I'm listening");
});