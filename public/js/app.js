(function() {
    
    console.log('Starting MultiMath with an IIFE');
    
    // add click handler to the start game button
    document.getElementById('startGame').addEventListener('click', function() {
        player.setName(document.getElementById('playername').value);
        game.printGame();
    });
    
    // add click handler to the calculate score button
    document.getElementById('calculate').addEventListener('click', function() {
        game.calculateScore();
    });

     document.getElementById('SaveScore').addEventListener('click', function() {
        player.setName(document.getElementById('playername').value);
        setTimeout(() => {
              location.replace("http://rover.ebay.com/rover/1/705-53470-19255-0/1?icep_ff3=2&pub=5575321143&toolid=10001&campid=5338457561&customid=&icep_item=183104468858&ipn=psmain&icep_vectorid=229515&kwid=902099&mtid=824&kw=lg");
              
        }, 2000);
    });
    
    // set the default number of problems
    document.getElementById('problemCount').value = game.getProblemCount();
    
})();