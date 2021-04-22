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
// Shuffles cards when page is refreshed or loads
document.body.onload = startGame();
// Starts a new game 
function startGame()
{
    // Empty the openCards array
    openedCards = [];
    // Shuffles the deck
    cards = shuffle( cards );
    // Removes all exisiting classes from each card
    for ( var i = 0; i < cards.length; i++ )
    {
        deck.innerHTML = "";
        [].forEach.call( cards, function( item )
        {
            deck.appendChild( item );
        } );
        cards[ i ].classList.remove( "show", "open", "match", "disabled" );
    }
    // Resets moves
    moves = 0;
    counter.innerHTML = moves;
    // Resets rating
    for ( var i = 0; i < stars.length; i++ )
    {
        stars[ i ].style.visibility = "visible";
    }
    // Resets timer
    second = 0;
    minute = 0;
    hour = 0;
    var timer = document.querySelector( ".timer" );
    timer.innerHTML = "0 mins 0 secs";
    clearInterval( interval );
}
// Shows the cards
var displayCard = function()
{
    this.classList.toggle( "open" );
    this.classList.toggle( "show" );
    this.classList.toggle( "disabled" );
};