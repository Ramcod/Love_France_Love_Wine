// Google maps
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: {
      lat: 45.764042,
      lng: 4.835659,
    }
  });

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var locations = [{
      lat: 46.108829,
      lng: 4.749740
    }, //Beaujolais//
    {
      lat: 44.837788,
      lng: -0.579180
    }, //Bordeaux//
    {
      lat: 47.278111,
      lng: 4.994210
    }, //Burgundy//
    {
      lat: 43.508530,
      lng: 2.346340
    }, //Languedoc-Rousillon//
    {
      lat: 47.355942,
      lng: -0.859410
    }, //Loire-Valley//
    {
      lat: 43.949318,
      lng: 4.805528
    } //Provence//
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });
}
$(document).ready(function () {
  // Carousel with a timed interval
  $("#myCarousel").carousel({
    interval: 6000
  });

  // Carousel Indicators- arrows
  $(".item1").click(function () {
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function () {
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function () {
    $("#myCarousel").carousel(2);
  });

  // Carousel Controls
  $(".carousel-control-prev").click(function () {
    $("#myCarousel").carousel("prev");
  });
  $(".carousel-control-next").click(function () {
    $("#myCarousel").carousel("next");
  });
});

// Pop up controls for link to wine club
const button = document.querySelector("button");
const popup = document.querySelector(".popup-background");
const close = document.querySelector(".popup-exit");

button.addEventListener("click", () => {
popup.style.display = "block";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
  });
  
popup.addEventListener("click", () => {
    popup.style.display = "none";
    });

    // Quiz code
    var myQuestions = [
      {
        question: "What year was The Eiffel Tower built?",
        answers: {
          a: '1907',
          b: '1897',
          c: '1887'
        },
        correctAnswer: 'c'
      },
      {
        question: "When is Bastille Day?",
        answers: {
          a: '12th June',
          b: '14th July',
          c: '29th August'
        },
        correctAnswer: 'b'
      }
    ];
    
    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');
    
    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
    
    function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    
      function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;
    
        // for each question...
        for(var i=0; i<questions.length; i++){
          
          // first reset the list of answers
          answers = [];
    
          // for each available answer...
          for(letter in questions[i].answers){
    
            // ...add an html radio button
            answers.push(
              '<label>'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                + questions[i].answers[letter]
              + '</label>'
            );
          }
    
          // add this question and its answers to the output
          output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
          );
        }
    
        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
      }
    
    
      function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){
    
          // find selected answer
          userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
          
          // if answer is correct
          if(userAnswer===questions[i].correctAnswer){
            // add to the number of correct answers
            numCorrect++;
            
            // color the answers green
            answerContainers[i].style.color = 'lightgreen';
          }
          // if answer is wrong or blank
          else{
            // color the answers red
            answerContainers[i].style.color = 'red';
          }
        }
    
        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
      }
    
      // show questions right away
      showQuestions(questions, quizContainer);
      
      // on submit, show results
      submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
      }
    
    }