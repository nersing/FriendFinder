var path = require("path");

var friendsArray = require("../data/friends.js")

module.exports = function(app){

	// Route friends.js page
	app.get("/api/friends", function(req, res){
		res.json(friendsArray)
	});

	//User's survey results with logic
	app.post("/api/friends", function(req, res){
		var userSurveyInfo = req.body;

		var userSurveyAnswers = userSurveyInfo.scores;

		var friendNameMatch = "";
		var friendPictureMatch = "";
		var highestTotalDifference = 1000;

		//Go through all possible friends in friendsArrray
		for(i = 0; i < friendsArray.length; i++){
			totalDifference = 0;

			//Look at differnces and find absolute value from the scores
		  for(n = 0; n < userSurveyAnswers; n++){
			totalDifference += Math.abs(friendsArray[i].scores[n] - userSurveyAnswers[n])
			}

			//Differences
			if(totalDifference < highestTotalDifference){
				highestTotalDifference = totalDifference;
				friendNameMatch = friendsArray[i].name;
				friendPictureMatch = friendsArray[i].photo;
			}
			
		}

		//Push the user's answers into the friendsArray
		friendsArray.push(userSurveyAnswers)

		//Send friend match 
		res.json({status: "Okay", friendNameMatch: friendNameMatch, friendPictureMatch: friendPictureMatch});

	});


}
