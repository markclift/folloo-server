var express 				= require("express"),
	app 					= express(),
	FirebaseTokenGenerator 	= require("firebase-token-generator"),
	tokenGenerator 			= new FirebaseTokenGenerator(process.env.FIREBASE_SECRET);

app.get('/authToken', function(req, res){
   console.log("Received request: " + req);
   var token = tokenGenerator.createToken({uid: "YYYYYYYY", some: "arbitrary", data: "here"});
   console.log("Token: " + token);
   res.json(token);
});

app.listen(process.env.PORT || 8080, function() {
	console.log("I'm listening");
});