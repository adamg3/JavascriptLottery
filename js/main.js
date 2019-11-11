const numberOfBalls = 6;
let numberArray = [];
let computerArray=[];
let gamePlayed = false;
$('.draw-announce').hide();

$('#start-draw').on('click', function(){
    if(!gamePlayed) {
        gamePlayed = true;
        winCount = 0;
        computerArray = [];
        $('.draw-announce').show();
        $('.computer-balls').children().remove();
        $('.player-balls').children().remove();

        // for (var i = 0; i < numberOfBalls; i++) {
            while(computerArray.length<numberOfBalls) {
                var random = Math.floor(Math.random() * 59) + 1;
                if (computerArray.indexOf(random) < 0) {
                    computerArray.push(random);
                }
            }
        // }
        computerArray.sort(function (a, b) {
            return a - b
        });
        for (let j = 0; j < computerArray.length; j++) {
            $('.computer-balls').append('<li class="computer-lottery-ball col-2">' + '<span class="drawn-number">' + computerArray[j] + '</span>' + '</li>');
        }

        for(let k =0; k< numberArray.length; k++){
            if(computerArray.indexOf(numberArray[k]) > -1){
                winCount++;
                $('.player-balls').append('<li class="lottery-ball-win col-2">' + '<span class="drawn-number">' + numberArray[k] + '</span>' + '</li>');
            } else {
                $('.player-balls').append('<li class="lottery-ball col-2">' + '<span class="drawn-number">' + numberArray[k] + '</span>' + '</li>');
            }
        }

        if(winCount === 6){
            $('.win-announce').append('<h4> You have matched 6 balls correctly and have won £500</h4>');
        } else if(winCount===5){
            $('.win-announce').append('<h4> You have matched 5 balls correctly and have won £200</h4>');
        } else if(winCount===4){
            $('.win-announce').append('<h4> You have matched 4 balls correctly and have won £100</h4>');
        } else if(winCount===3){
            $('.win-announce').append('<h4> You have matched 3 balls correctly and have won £50</h4>');
        } else{
            $('.win-announce').append('<h4> You have not matched enough balls this time.</h4>');
        }

    }

});


$('#confirm-numbers').on('click', function(){
    numberArray = [];
    for(var i = 0; i<numberOfBalls;i++){
        var entry = parseInt($('#input'+i).val());
        console.log(entry);
        if (numberArray.indexOf(entry) < 0) {
            numberArray.push(entry);
        } else {
            alert('There is a duplicate entry');
        }
    }
    if(numberArray.length === 6){
        numberArray.sort(function (a, b) {
            return a - b
        });
        $('.player-balls').children().remove();
        console.log(numberArray);
        for(var i=0;i<numberArray.length;i++){
            $('.player-balls').append('<li class="lottery-ball col-2">' + '<span class="drawn-number">' + numberArray[i] + '</span>' + '</li>');
        }
    } else{
        alert('The draw requires 6 numbers');
    }

});

$('#pick-random').on('click', function(){
    numberArray = [];
    // for (var i = 0; i < numberOfBalls; i++) {
        while(numberArray.length<numberOfBalls) {
            var random = Math.floor(Math.random() * 59) + 1;
            if (numberArray.indexOf(random) < 0) {
                numberArray.push(random);
            }
        }
    // }
    numberArray.sort(function (a, b) {
        return a - b
    });
    $('.player-balls').children().remove();
    for(var i=0;i<numberArray.length;i++){
        document.getElementById('input'+i).textContent = numberArray[i];
        console.log(i)
        $('.player-balls').append('<li class="lottery-ball col-2">' + '<span class="drawn-number">' + numberArray[i] + '</span>' + '</li>');
    }
});


$('.button-reset').on('click', function(){
    gamePlayed = false;
    computerArray = [];
    winCount = 0;
    $('.computer-balls').children().remove();
    for(var i = 0; i < numberOfBalls;i++) {
        $('.computer-balls').append(' <li class="computer-lottery-ball col-2"></li>');
    }
    $('.player-balls').children().remove();
    for(var i = 0; i < numberOfBalls;i++) {
        $('.player-balls').append(' <li class="lottery-ball col-2"></li>');
    }
    for(var i = 0; i<numberOfBalls;i++){
        $('#input'+i).val("");
    }
    numberArray=[];
    $('.draw-announce').hide();
    $('.win-announce').children().remove();
});