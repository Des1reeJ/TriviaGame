$(document).ready(function () {

    var correct = 0;
    var incorrect = 0;
    var answer = 0;
    var counter = 0;
    var wins = 0;
    var losses = 0;
    var totalScore = 0;


    //how to call a fxn once invoked

    //Display message that creates panel

    function newGame() {
        loadQuestion();
        $("#header").append("<div id='panel'>Questionnaire</div>");
    }

    $("button").on('click', function () {
        newGame();
    })

    var questionArray = [{
        q: "In this classic diverse 90's sitcom, what was the real name of the character who later became one of the greatest comedians of all time?",
        answer: ["Jay Leno", "James Baldwin", "Jimmy Carter", "Jim Carrey"],
        name: "diverse",
        correct: "Jim Carrey",
        divClass: ".diverse",
    },
    {
        q: "College Campuses were very different back in the 90's. Which Black sitcom took place on the set of a Historically Black College/University?",
        answer: ["Living Single", "A Different World", "Moesha", "Sister, Sister"],
        name: "college",
        correct: "A Different World",
        divClass: ".college",
    },
    {
        q: "They initially met in a hair salon in Los Angeles, but thier love ascended on thier way to The Bay Area for a hair show. What 90's Black cinema flick, starring two of the most famous artists of all time, does the question refer to?",
        answer: ["Juice", "Def by Temptation", "Poetic Justice", "Love Jones"],
        name: "losangeles",
        correct: "Poetic Justice",
        divClass: ".losangeles",
    },
    {
        q: "Eddie Murphy starred alongside which bombshell in the movie Boomerang!?",
        answer: ["Angela Bassett", "Loretta Devine", "Halle Berry", "Vivica A. Fox"],
        name: "boomerang",
        correct: "Halle Berry",
        divClass: ".boomerang",
    },
    {
        q: "Two successful Black parents and thier quirky family was ranked the most influential, iconic yet unrealistic show aired on late night televison. Which Black sitcom am I referring to?",
        answer: ["Different Stokes", "Good Times", "Wayans Bros.", "The Cosby Show"],
        name: "iconic",
        correct: "The Cosby Show",
        divClass: ".iconic",
    },
    {
        q: "A young Black man lived in his tiny New York apartment with his Fiance, down the way from a best friend who never held a job and a woman whose name is too difficult to spell. Which sitcom am I referring to?",
        answer: ["Martin", "Family Matters", "Smart Guy", "Keenan & Kel"],
        name: "apartment",
        correct: "Martin",
        divClass: ".apartment",
    },
    {
        q: "'I'm a ball player, OK? If anybody knows what that means, it should be you!' came from which flick that took place in Baldwin Hills, Los Angeles, CA?",
        answer: ["Space Jam", "White Men Can't Jump", "Love & Basketball", "Coach Carter"],
        name: "ballplayer",
        correct: "Love & Basketball",
        divClass: ".ballplayer",
    },
    {
        q: "A staple Black sitcom on Disney channel, this show is about a young girl who had a dynamic group of friends and a successful, comedic family whose father ate chicken and waffles everyday for breakfast. Which cartoon am I referring to?",
        answer: ["Rugrats", "The Proud Family", "The Boondocks", "Kid n' Play"],
        name: "disney",
        correct: "The Proud Family",
        divClass: ".disney",
    }

    ]

    function checked() {
    var selected = $("input[name='" + questionArray[0].divClass + "']:checked").val();
    alert("You've selected " + selected);
    }

  



    // var intervalID = window.setInterval(myCallback, 3000);


    setTimeout(function () {
    checked();
    }, 6000);


    // call loadQuestion function outside of brackets, fxn and fxn name
    function loadQuestion() {

        for (i = 0; i < questionArray.length; i++) {
            $("#question1").append(questionArray[i].q);
            $("#question1").append("<br>");
            for (j = 0; j < 4; j++) {
                $("#question1").append("<span class = 'answers ' > <input type= 'radio' name='" + questionArray[i].divClass + "'/> <label>" + questionArray[i].answer[j] + "<label></span>");
            }
            $("#question1").append("<br><hr>");

        }

    }

    // when time is up, compare selected answer with correct ans. 





    // when a player initiates a game, they are prompted to answer 10 multiple choice questions, given a 30 second time interval. The theme of the questionnaire is "90's Black Effect", so the user will have to think back to the best era of all time, and figure out what the correct 
    // answers are to the trivia questions. If the user answers correctly, they are prompted to another page with the correct answer (given in an alert), and a GIF of the show/movie referenced (positive one - a GIF that shows someone in the show/movie celebrating). 
    //if the user answers incorrectly, a GIF with a disappointing scene from the show/movie will appear and redirect to teh next question.
    //at the end of the trivia, the user's score will dislplay with an alert (YOU WON! or YOU LOSE!) 









});











