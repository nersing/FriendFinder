var path = require("path");

var friendsArray = require("../data/friends.js")

module.exports = function(app){

	// Route friends.js page
	app.get("/api/friends", function(req, res){
		res.json(friendsArray)

	});

	//User's survey results with logic
	app.post("/api/friends", function(req, res){
		var userSurveyInput = req.body;

		// console.log(req.body)

		var userSurveyAnswers = userSurveyInput.scores;

		// console.log(userSurveyAnswers)

		var friendNameMatch = "";
		var friendPictureMatch = "";
		var friendDifference = 1000;
		var totalDifference = 0;


		//Go through all possible friends in friendsArrray
		for(i = 0; i < friendsArray.length; i++){
			totalDifference = 0;
			
			//this show undefined
			console.log(userSurveyAnswers)

			//Look at differnces and find absolute value from the scores
		  for(n = 0; n < userSurveyAnswers.length; n++){
			totalDifference += Math.abs(parseInt(friendsArray[i].scores[n]) - parseInt(userSurveyAnswers[n]))
			}

			//Differences
			if(totalDifference < friendDifference){
				friendDifference = totalDifference;
				friendNameMatch = friendsArray[i].name;
				friendPictureMatch = friendsArray[i].photo;
			}
			
		}

		//Push the user's answers into the friendsArray
		friendsArray.push(userSurveyInput)

		//Send friend match 
		res.json({status: "Okay", friendNameMatch: friendNameMatch, friendPictureMatch: friendPictureMatch});

	});


}
