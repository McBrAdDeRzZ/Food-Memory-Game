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
// Check if cards are match or not
function cardOpen()
{
    openedCards.push( this );
    var len = openedCards.length;
    if ( len === 2 )
    {
        moveCounter();
        if ( openedCards[ 0 ].type === openedCards[ 1 ].type )
        {
            matched();
        }
        else
        {
            unmatched();
        }
    }
};
// Functions when cards match
function matched()
{
    openedCards[ 0 ].classList.add( "match", "disabled" );
    openedCards[ 1 ].classList.add( "match", "disabled" );
    openedCards[ 0 ].classList.remove( "show", "open", "no-event" );
    openedCards[ 1 ].classList.remove( "show", "open", "no-event" );
    openedCards = [];
}
// Functions when cards don't match
function unmatched()
{
    openedCards[ 0 ].classList.add( "unmatched" );
    openedCards[ 1 ].classList.add( "unmatched" );
    disable();
    setTimeout( function()
    {
        openedCards[ 0 ].classList.remove( "show", "open", "no-event", "unmatched" );
        openedCards[ 1 ].classList.remove( "show", "open", "no-event", "unmatched" );
        enable();
        openedCards = [];
    }, 1100 );
}
// Disable cards temporarily
function disable()
{
    Array.prototype.filter.call( cards, function( card )
    {
        card.classList.add( 'disabled' );
    } );
}
// Enable cards and disable matched cards
function enable()
{
    Array.prototype.filter.call( cards, function( card )
    {
        card.classList.remove( 'disabled' );
        for ( var i = 0; i < matchedCard.length; i++ )
        {
            matchedCard[ i ].classList.add( "disabled" );
        }
    } );
}
// Player's moves
function moveCounter()
{
    moves++;
    counter.innerHTML = moves;
    //Start timer on first card clicked
    if ( moves == 1 )
    {
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }
    // Setting rates based on moves
    if ( moves > 8 && moves < 20 )
    {
        for ( i = 0; i < 3; i++ )
        {
            if ( i > 1 )
            {
                stars[ i ].style.visibility = "collapse";
            }
        }
    }
    else if ( moves > 21 )
    {
        for ( i = 0; i < 3; i++ )
        {
            if ( i > 0 )
            {
                stars[ i ].style.visibility = "collapse";
            }
        }
    }
}
// Game timer
var second = 0,
    minute = 0;
hour = 0;
var timer = document.querySelector( ".timer" );
var interval;

function startTimer()
{
    interval = setInterval( function()
    {
        timer.innerHTML = minute + "mins " + second + "secs";
        second++;
        if ( second == 60 )
        {
            minute++;
            second = 0;
        }
        if ( minute == 60 )
        {
            hour++;
            minute = 0;
        }
    }, 1000 );
}