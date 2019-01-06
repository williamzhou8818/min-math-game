var Scoreboard = function() {
    
    console.log('Creating a scoreboard...');
    
    // private members
    var results = []; // array to store result of every game
    
    function addResult(newResult) {
        results.push(newResult);
    }
    
    function updateScoreboard() {
    
        var output = '<h2>Scoreboard</h2>';
    
        // loop over all results and create the html for the scoreboard
        for (var index = 0; index < results.length; index++) {
            var result = results[index];
            if(result.score >=5 ) {
                // Get Code 5 Dollar dis
                console.log('Well Done You Get 5 dollar dic');
                                    output += '<div class="card" style="width: 40rem;">';
                    output += '<div class="card-body">';
                    output += '<h5 class="card-title">';
                    output += '<i class="far fa-grin-stars"></i>';
                    output += '</h5>';
                    output += '<h4>';
                    output += 'WoooWooooo, '+ result.name +' '+ result.score + '/' + result.problems + '</br> Well Done You So Smart!! '+':)';
                    output += '</h4>';
                    output += '</div>';
                    output += '</div>';

                    // output += '<h4>';
                    // output += 'HI, '+ result.name +' '+ result.score + '/' + result.problems + '</br> Well Done You Get 5 dollar dic !! '+':)';
                    // output += '</h4>';

            }  else if (result.score < 5 && result.score > 1) {
                console.log('Great Jobs Keep Canllage ');
                    output += '<div class="card" style="width: 40rem;">';
                    output += '<div class="card-body">';
                    output += '<h5 class="card-title">';
                    output += '<i class="far fa-smile-wink"></i>';
                    output += '</h5>';
                    output += '<h4>';
                    output += 'HI, ' +result.name + ' '+result.score + '/' + result.problems + '</br> Great Jobs Keep Canllage !! '+':)';
                    output += '</h4>';
                    output += '</div>';
                    output += '</div>';

                    // output += '<h4>';
                    // output += 'HI, ' +result.name + ' '+result.score + '/' + result.problems + '</br> Great Jobs Keep Canllage !! '+':)';
                    // output += '</h4>';
            } else if (result.score < 1) {
                    output += '<div class="card" style="width: 40rem;">';
                    output += '<div class="card-body">';
                    output += '<h5 class="card-title">';
                    output += '<i class="far fa-dizzy"></i>';
                    output += '</h5>';
                    output += '<h4>';
                    output += 'OoOpsss...'+ result.name + ' '+ result.score + '/' + result.problems + ' <br> Please, Try Do Your Best!! '+'';
                    output += '</h4>';
                    output += '</div>';
                    output += '</div>';

                    
                    // output += '<h4>';
                    // output += 'OoOpsss..'+ result.name + ' '+ result.score + '/' + result.problems + ' <br> Please, Try Do Your Best!! '+'';
                    // output += '</h4>';
            } 

        }
    
        // add the updated scoreboard to the page
        var scoresElement = document.getElementById('scores');
        scoresElement.innerHTML = output;
        var finlElement = document.getElementById('finlscore');
        finlElement.value =  result.score;


    }
    
    // return public members
    return {
        addResult: addResult,
        updateScoreboard: updateScoreboard
    }
    
};