var express 				= require("/usr/local/lib/node_modules/express"),
	app 					= express(),
	FirebaseTokenGenerator 	= require("firebase-token-generator"),
	config					= require("config"),
	tokenGenerator 			= new FirebaseTokenGenerator(config.firebaseSecret);

app.get('/authToken', function(req, res){
   console.log("Received request: " + req);
   var token = tokenGenerator.createToken({uid: "YYYYYYYY", some: "arbitrary", data: "here"});
   console.log("Token: " + token);
   res.json(token);
});

app.listen(3000, function() {
	console.log("I'm listening");
});