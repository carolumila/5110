var cards = ["10C.jpg", "10D.jpg", "10H.jpg", "10S.jpg", "2C.jpg", "2D.jpg", "2H.jpg", "2S.jpg", "3C.jpg", "3D.jpg", "3H.jpg", "3S.jpg", "4C.jpg", "4D.jpg", "4H.jpg", "4S.jpg", "5C.jpg", "5D.jpg", "5H.jpg", "5S.jpg", "6C.jpg", "6D.jpg", "6H.jpg", "6S.jpg", "7C.jpg", "7D.jpg", "7H.jpg", "7S.jpg", "8C.jpg", "8D.jpg", "8H.jpg", "8S.jpg", "9C.jpg", "9D.jpg", "9H.jpg", "9S.jpg", "AC.jpg", "AD.jpg", "AH.jpg", "AS.jpg", "JC.jpg", "JD.jpg", "JH.jpg", "JS.jpg", "KC.jpg", "KD.jpg", "KH.jpg", "KS.jpg", "QC.jpg", "QD.jpg", "QH.jpg", "QS.jpg"]

var discardCards = [];
var tempArr;
var numInHand = 0;

let deck = document.querySelector('#deck');
let discard = document.querySelector('#discard');
let error = document.querySelector('#error');

function shuffle() {
    error.innerHTML = "";
    deck.innerHTML = "";
    discard.innerHTML = "";
    
    if (cards.length == 0) {
        error.innerHTML = "~DECK IS EMPTY. Reset the deck!~";
    } else {
        for (var i = 0; i < 5; i++) {
            let outcome = Math.floor(Math.random() * cards.length);
            if (cards.length != 0) {
                deck.innerHTML += "<img src=cards/" + cards[outcome] + ">";
            }
            cards.splice(outcome, 1);
        } // for
        numInHand = 5;
    } // if
    
    $(function() {
        $('img').draggable();
    })
    
    $('img').dblclick(function() {
        $(this).css("display", "none");
        discard.innerHTML += "<img src=" + this.src + ">";
        tempArr= this.src.split("/");
        discardCards.push(tempArr[tempArr.length - 1]);
        numInHand--;
    })
} // shuffle

function addBack() {
    error.innerHTML = "";
    if (cards.length == 0) {
        error.innerHTML = "~DECK IS EMPTY. Reset the deck!~";
    } else if (numInHand == 5) {
        error.innerHTML = "You can't hold more than 5 cards in your hand!"
    }
    for (var i = 0; i < 5 - numInHand; i++) {
        let outcome = Math.floor(Math.random() * cards.length);
        deck.innerHTML += "<img src=cards/" + cards[outcome] + ">";
        cards.splice(outcome, 1);
    }
    
    numInHand = 5;
    
    $(function() {
        $('img').draggable();
    })
    
    $('img').dblclick(function() {
        $(this).css("display", "none");
        discard.innerHTML += "<img src=" + this.src + ">";
        tempArr= this.src.split("/");
        discardCards.push(tempArr[tempArr.length - 1]);
        numInHand--;
    })
    
    discard.innerHTML = "";
    
} // addBack

function reset() {
    cards = ["10C.jpg", "10D.jpg", "10H.jpg", "10S.jpg", "2C.jpg", "2D.jpg", "2H.jpg", "2S.jpg", "3C.jpg", "3D.jpg", "3H.jpg", "3S.jpg", "4C.jpg", "4D.jpg", "4H.jpg", "4S.jpg", "5C.jpg", "5D.jpg", "5H.jpg", "5S.jpg", "6C.jpg", "6D.jpg", "6H.jpg", "6S.jpg", "7C.jpg", "7D.jpg", "7H.jpg", "7S.jpg", "8C.jpg", "8D.jpg", "8H.jpg", "8S.jpg", "9C.jpg", "9D.jpg", "9H.jpg", "9S.jpg", "AC.jpg", "AD.jpg", "AH.jpg", "AS.jpg", "JC.jpg", "JD.jpg", "JH.jpg", "JS.jpg", "KC.jpg", "KD.jpg", "KH.jpg", "KS.jpg", "QC.jpg", "QD.jpg", "QH.jpg", "QS.jpg"]
    
    discardCards =[];
    numInHand = 0;
    deck.innerHTML = "";
    discard.innerHTML = "";
    error.innerHTML = "";
}