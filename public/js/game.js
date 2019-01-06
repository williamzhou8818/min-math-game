var game = function() {
    
    // private members
    var factorElement = [36, 20, 22, 34, 46, 29, 26, 51, 11, 9];
    var problemsPerGame = `5`; // set default value
    var factorElementTwo = [12, 50, 2, 33, 8, 20, 11, 9, 32, 42]
    
    function printGame() {
    
        player.logPlayer();
    
        // determine the number of problems to show
        setProblemCount(document.getElementById('problemCount').value);
    
        // create the html for the current game
        var gameForm = '';
        for (var i = 1; i <= problemsPerGame; i++) {
            gameForm += '<div class="input-group-prepend">';
            gameForm += '<span  for="answer' + i + '" class="input-group-text" style="width: 200px; text-align: center; ">';
            gameForm += factorElement[i] + ' x ' + factorElementTwo[i] + ' = </span>';
            gameForm += '<input type="text" class="form-control" aria-describedby="inputGroup-sizing-default" id="answer' + i + '" size="10" />';
            gameForm += '</div>';
        }
    
        // add the new game to the page
        var gameElement = document.getElementById('game');
        gameElement.innerHTML = gameForm;
    
        // enable the calculate score button
        document.getElementById('calculate').removeAttribute('disabled');
    }
    
    function calculateScore() {
    
        var problemsInGame = getProblemCount();
        var score = 0;
    
        // loop through the text boxes and calculate the number that are correct
        for (var i = 1; i <= problemsInGame; i++) {
            var answer = document.getElementById('answer' + i).value;
            if((factorElement[i] * factorElementTwo[i]) == answer) {
                score++;
            }
        }
    
        // create a new result object to pass to the scoreboard
        var result = {
            name: player.getName(),
            score: score,
            problems: problemsInGame,
            factor: factorElement.value
        };
    
        // add the result and update the scoreboard
        var scoreboard = new Scoreboard();
        scoreboard.addResult(result);
        scoreboard.updateScoreboard();
    
        // disable the calculate score button
        document.getElementById('calculate').setAttribute('disabled', 'true');
    }
    
    function setProblemCount(newProblemCount) {
        problemsPerGame = newProblemCount;
    }
    
    function getProblemCount() {
        return problemsPerGame;
    }
    
    // public members
    return {
        printGame: printGame,
        calculateScore: calculateScore,
        setProblemCount: setProblemCount,
        getProblemCount: getProblemCount
    };
    
}();