// // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// var express = require('express');
// var router = express.Router();
// var path = require("path");


// var friends = [
//     {
//     name: "Amy",
//     photo: "abc.jpg",
//     scores: [ 5, 2, 3, 3, 1, 2, 3, 4, 5, 1]
// },
// {
//     name: "John",
//     photo: "abc.jpg",
//     scores: [ 4, 3, 1, 2, 1, 5, 2, 1, 1, 2]
// }]

// router.get("/api/friends", function(req, res){
//     res.json(friends);
// });

// // Survey data is passed in from the form using .post
// router.post("/api/friends", function(req, res) {
//     //res.json(friends[]);
//     console.log('req');
//     console.log(req.body);

//     var surveyScores = [ 
//         req.body.Q1,
//         req.body.Q2,
//         req.body.Q3,
//         req.body.Q4,
//         req.body.Q5,
//         req.body.Q6,
//         req.body.Q7,
//         req.body.Q8,
//         req.body.Q9,
//         req.body.Q10
//     ];
    
//     var bestMatch;
//     var lowestSum = 1000000;

//     for (var i = 0; i < friends.length; i++) {
//         var friend = friends[i];
//         var friendScores = friend.scores;
//         var sum = 0;

//         for (var j = 0; j < surveyScores.length; j++) {
//             var newSurveyScore = parseInt(surveyScores[j]);
//             var friendScore = friendScores[j];
//             var difference = Math.abs(newSurveyScore - friendScore);
//             sum = sum + difference;
//         };

//         if (sum < lowestSum) {
//             lowestSum = sum;
//             bestMatch = friend;
//         }
//     };

//     res.json(bestMatch);

// });

// module.exports = router;

var path = require("path");
var friends = require("../data/friends");

module.exports = function(app) {
// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
app.get("/api/friends", function(req, res) {
    return res.json(friends);
});
  
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post("/api/friends", function(req, res){
    var newFriend = req.body;

    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
});
};