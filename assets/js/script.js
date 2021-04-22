// Cards array holds all cards
let card = document.getElementsByClassName( "card" );
let cards = [ ...card ];
// Deck of cards
const deck = document.getElementById( "card-deck" );
// Moves variable
let moves = 0;
let counter = document.querySelector( ".moves" );
// Star icons
const stars = document.querySelectorAll( ".fa-star" );
// Matched Cards
let matchedCard = document.getElementsByClassName( "match" );
// Stars list
let starsList = document.querySelectorAll( ".stars li" );
// Close icon in modal
let closeicon = document.querySelector( ".close" );
// Modal
let modal = document.getElementById( "popup1" )
// Array for opened cards
var openedCards = [];
// Shuffles cards
function shuffle( array )
{
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while ( currentIndex !== 0 )
    {
        randomIndex = Math.floor( Math.random() * currentIndex );
        currentIndex -= 1;
        temporaryValue = array[ currentIndex ];
        array[ currentIndex ] = array[ randomIndex ];
        array[ randomIndex ] = temporaryValue;
    }
    return array;
};