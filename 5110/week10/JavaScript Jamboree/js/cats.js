let container = document.querySelector('#container');
    let selectMenu = document.querySelector('#breedSelect');
    
    $( document ).ready(function() {
            $.getJSON('https://api.thecatapi.com/v1/breeds', function(data) {
                
                for (var i=0; i<data.length;i++) {
                    selectMenu.innerHTML += "<option value=" + data[i].id + ">" + data[i].name + "</option>";
                } //for
                
                
            });
        })
                
    function loadQuiz() {
        catInfo.innerHTML = "";
        let breed = selectMenu.value;
        findIndex(breed);
            
        $.getJSON('https://api.thecatapi.com/v1/breeds', function(data) {
            container.innerHTML = "";
            for (var i=0; i<3; i++) {
                switch(i) {
                    case 0:
                        container.innerHTML += "<div id=q0></div>";
                        loadAnswers(0);
                        break;
                    case 1:
                        container.innerHTML += "<div id=q1></div>";
                        loadAnswers(1);
                        break;
                    case 2:
                        container.innerHTML += "<div id=q2></div>";
                        loadAnswers(2);
                } // switch
            } // for
            
            container.innerHTML += "<button id=showMore onclick=showInfo()>Show me more info about the " + data[indexOfBreed].name + " breed!</button>";
        });
    } // loadQuiz
    
    var randomAnswers = [];
    function loadAnswers(question) {
        $.getJSON('https://api.thecatapi.com/v1/breeds', function(data) {
            
            // retrieve 3 random indicies
            for (var i=0; i<3; i++) {
                let outcome = Math.floor(Math.random() * data.length);
                if (outcome == indexOfBreed) {
                    while (outcome == indexOfBreed) {
                        outcome = Math.floor(Math.random() * data.length);
                    } //while
                } //if
                randomAnswers.push(outcome);
            } // for
            
            // load answers
            let answers = document.querySelector('#q'+question);            
            switch(question){
                case 0:
                    answers.innerHTML += "<h2 class=questions>How would you describe the temperament of the " + data[indexOfBreed].name + " breed?</h2><div id=display1 class=displayLeft></div>";
                    document.querySelector('#display1').innerHTML = "<p>(1) " + data[indexOfBreed].temperament + "</p>";
                    for (var i=0; i<3; i++) {
                        let mood = data[randomAnswers[i]].temperament;
                        document.querySelector('#display1').innerHTML += "<p>(" + (i+2) + ") " + mood + "</p>";
                    } //for
                    answers.innerHTML += "<label for=userInput1>Answer: </label><input type=text id=userInput1><button onclick=checkAnswer(1)>check</button><br><p id=feedback1></p>";
                    break;
                case 1:
                    answers.innerHTML += "<h2 class=questions>Where is the origin of this breed?</h2><div id=display2 class=displayLeft></div>";
                    document.querySelector('#display2').innerHTML = "<p>(1) " + data[indexOfBreed].origin + "</p>";
                    for (var i=0; i<3; i++) {
                        let mood = data[randomAnswers[i]].origin;
                        document.querySelector('#display2').innerHTML += "<p>(" + (i+2) + ") " + mood + "</p>";
                    } //for
                    answers.innerHTML += "<label for=userInput2>Answer: </label><input type=text id=userInput2><button onclick=checkAnswer(2)>check</button><br><p id=feedback2></p>";
                    break;
                case 2:
                    answers.innerHTML += "<h2 class=questions>What is the typical lifespan of a " + data[indexOfBreed].name + "?</h2><div id=display3 class=displayLeft></div>";
                    document.querySelector('#display3').innerHTML = "<p>(1) " + data[indexOfBreed].life_span + " years</p>";
                    for (var i=0; i<3; i++) {
                        let mood = data[randomAnswers[i]].life_span;
                        document.querySelector('#display3').innerHTML += "<p>(" + (i+2) + ") " + mood + " years</p>";
                    } //for
                    answers.innerHTML += "<label for=userInput3>Answer: </label><input type=text id=userInput3><button onclick=checkAnswer(3)>check</button><br><p id=feedback3></p>";
                    break;
            } // switch
                
         });
        
    } // loadAnswers

    function checkAnswer(question) {
        let userInput;
        let feedback;
        switch(question) {
            case 1:
                userInput = document.querySelector('#userInput1');
                feedback = document.querySelector('#feedback1');
                break;
            case 2:
                userInput = document.querySelector('#userInput2');
                feedback = document.querySelector('#feedback2');
                break;
            case 3:
                userInput = document.querySelector('#userInput3');
                feedback = document.querySelector('#feedback3');
                break;
        } // switch
        
        // if answer is correct
        if (userInput.value == "1") {
            feedback.innerHTML = "That's correct!"
        } else {
            feedback.innerHTML = "Sorry, that's incorrect. Try Again!"
        }
    } //checkAnswer
    
    let indexOfBreed = -1;
    function findIndex(b) {
        indexOfBreed = -1;
        $.getJSON('https://api.thecatapi.com/v1/breeds', function(data) {
            for (var i=0; i<data.length; i++) {
                if (data[i].id == b) {
                    indexOfBreed = i;
                    i = data.length;
                }
            }
        });
    } // findIndex
    
    let catInfo = document.querySelector('#catInfo');
    function showInfo() {
        catInfo.innerHTML = "";
        $.getJSON('https://api.thecatapi.com/v1/breeds', function(data) {
            let url = data[indexOfBreed].reference_image_id;
            catInfo.innerHTML += "<img height=300px src=https://cdn2.thecatapi.com/images/" + url + ".jpg>" +
                "<h1>" + data[indexOfBreed].name + "</h1><p>" + data[indexOfBreed].description + "</p><p>Temperament: " + data[indexOfBreed].temperament + "</p><p>Origin: " + data[indexOfBreed].origin + "</p><p>Lifespan: " + data[indexOfBreed].life_span + " years</p><p><a href=" + data[indexOfBreed].wikipedia_url + " target=_blank>learn more here!</a></p>";
        });
         
    } // showInfo