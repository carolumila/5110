/*** Slideshow One ***/
let namesOne = ["Jeb Bush", "Ben Carson", "Lincoln Chafee", "Chris Christie", "Ted Cruz", "Carly Fiorina", "Jim Gilmore"]

let pixOne = ["bush.jpg", "carson.jpg", "chafee.jpg", "christie.jpg", "cruz.jpg", "fiorina.jpg", "gilmore.jpg"]

let output1 = document.querySelector('#slideshowOne');
let next1 = document.querySelector('#oneNext');
let previous1 = document.querySelector('#onePrev');

// display initial candidate
output1.innerHTML += "<div>"  + namesOne[0] + "<br>" + "<img src = pix/" + pixOne[0] + "></div>";

// display new candidate
let i = 0;
function canShow1(plusMinus) {
    output1.innerHTML = "<div>"  + namesOne[i] + "<br><img src = pix/" + pixOne[i] + "></div>";
    i += plusMinus;
    if (i == namesOne.length) {
        i = 0;
    }
    if (i < 0) {
        i = namesOne.length - 1;
    }
}

// control button clicks
next1.onclick = function() {
    canShow1(1);
}

previous1.onclick = function() {
    canShow1(-1);
}

/*** Slideshow Two ***/
let namesTwo = ["Lindsey Graham", "Bobby Jindal", "John Kasich", "Lawrence Lessig", "Martin O'Malley", "George Pataki", "Rand Paul"]

let pixTwo = ["graham.jpg", "jindal.jpg", "kasich.jpg", "lessig.jpg", "omalley.jpg", "pataki.jpg", "paul.jpg"]

let output2 = document.querySelector('#slideshowTwo');
let next2 = document.querySelector('#twoNext');
let previous2 = document.querySelector('#twoPrev');

// display initial candidate
output2.innerHTML += "<div>"  + namesTwo[0] + "<br>" + "<img src = pix/" + pixTwo[0] + "></div>";

// display new candidate
let j = 0;
function canShow2(plusMinus) {
    output2.innerHTML = "<div>"  + namesTwo[j] + "<br><img src = pix/" + pixTwo[j] + "></div>";
    j += plusMinus;
    if (j == namesTwo.length) {
        j = 0;
    }
    if (j < 0) {
        j = namesTwo.length - 1;
    }
}

// control button clicks
next2.onclick = function() {
    canShow2(1);
}

previous2.onclick = function() {
    canShow2(-1);
}

/*** Slideshow Three ***/
let namesThree = [ "Rick Perry", "Marco Rubio", "Bernie Sanders", "Rick Santorum", "Donald Trump", "Scott Walker", "Jim Webb"]

let pixThree = ["perry.jpg", "rubio.jpg", "sanders.jpg", "santorum.jpg", "trump.jpg", "walker.jpg", "webb.jpg"]

let output3 = document.querySelector('#slideshowThree');
let next3 = document.querySelector('#threeNext');
let previous3 = document.querySelector('#threePrev');

// display initial candidate
output3.innerHTML += "<div>"  + namesThree[0] + "<br>" + "<img src = pix/" + pixThree[0] + "></div>";

// display new candidate
let k = 0;
function canShow3(plusMinus) {
    output3.innerHTML = "<div>"  + namesThree[k] + "<br><img src = pix/" + pixThree[k] + "></div>";
    k += plusMinus;
    if (k == namesThree.length) {
        k = 0;
    }
    if (k < 0) {
        k = namesThree.length - 1;
    }
}

// control button clicks
next3.onclick = function() {
    canShow3(1);
}

previous3.onclick = function() {
    canShow3(-1);
}