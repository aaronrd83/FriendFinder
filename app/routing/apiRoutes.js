var friends = require('../data/friends');

module.exports = function(app){
console.log("hello")
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req,res){
        var friendScores = req.body.scores;
        var match = 0;
        var currentDifference = 0;
        var previousDifference = 1000000000;

        for(let i = 0; i < friends.length; i++){
          for(let j=0; j < friendScores.length; j++){
            currentDifference += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(friendScores[j])));
          }
          // console.log("current user", friends[i])
          // console.log("previous difference", previousDifference)
          // console.log("current difference", currentDifference)

          if (currentDifference < previousDifference) {
            previousDifference = currentDifference;
            currentDifference = 0;
            match = friends[i];
          }
          console.log(match)
        }
        //console.log(req.body)
        res.json(match);
        friends.push(req.body);
    });
}