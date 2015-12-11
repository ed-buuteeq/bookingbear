$(function(){
    initPanda();

    // initialize the button handlers
    $('.btn-left').click(QuestionBear.prev);
    $('.btn-right').click(QuestionBear.next);
    $('.btn-adventure').click(QuestionBear.cityList);
});

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

function initPanda() {
    var $panda = $("#bear");
    TweenLite.to($panda, 3, { left: '50px' , delay: 0, onComplete:QuestionBear.firstQuestion});
}





var QuestionBear = function() {
    var questionIndex = 0;


    var questions = ['What kind of weather do you like?', 
    'What kind of places do you usually like to run around in? I usually hangout in bamboo forests.',
    'Do you like to party? I\'m usually asleep by dusk.',
    'Whats your price range? I don\'t have a job right now so mines pretty modest.',
    'Do you usually care about the food of the place you travel? I love places with raw bamboo, it my favorite dish.',
    'Sometimes traveling can be tough when you cant communicate, is that imporatant to you?'];

    var ranges = [
        {
          "min": "Cold and rainy",
          "max": "Hot and sunny"
        },
        {
          "min": "Frolic in nature",
          "max": "The concrete jungle"
        },
        {
          "min": "Tea and a cookie",
          "max": "All night rave"
        },
        {
          "min": "On a budget",
          "max": "Gold bath!"
        },
        {
          "min": "Mickey Ds",
          "max": "Fickle foodie"
        },
        {
          "min": "Speak American",
          "max": "Je suis polygot"
        }
      ];

    function showFirstQuestion(){
        $('.popover-panda .popover').show();
    }


    function nextQuestion(){
        if (questionIndex < questions.length - 1){
            questionIndex += 1;
            $('.popover-panda .popover-content p').html(questions[questionIndex]);
            $('.range-left').text(ranges[questionIndex].min);
            $('.range-right').text(ranges[questionIndex].max);
        }
    }

    function previousQuestion(){
        if (questionIndex > 0){
            questionIndex -= 1;
            $('.popover-panda .popover-content p').html(questions[questionIndex]);
            $('.range-left').text(ranges[questionIndex].min);
            $('.range-right').text(ranges[questionIndex].max);
        }
    }

    function goToCityList(){
        location.href = 'citylist.html?id=' + $('input[type="range"]').val();
    }
    
    return {
        firstQuestion: showFirstQuestion,
        next: nextQuestion,
        prev: previousQuestion,
        cityList: goToCityList
    }
}();