// document
var d = document;

// build deck
var deck = [];

// build suits
var suits = [];
suits['spades'] = [
    // spades
    ['A', 'spade'],
    ['2', 'spade'],
    ['3', 'spade'],
    ['4', 'spade'],
    ['5', 'spade'],
    ['6', 'spade'],
    ['7', 'spade'],
    ['8', 'spade'],
    ['9', 'spade'],
    ['10', 'spade'],
    ['J', 'spade'],
    ['Q', 'spade'],
    ['K', 'spade']
];
suits['hearts'] = [
    // hearts
    ['A', 'heart'],
    ['2', 'heart'],
    ['3', 'heart'],
    ['4', 'heart'],
    ['5', 'heart'],
    ['6', 'heart'],
    ['7', 'heart'],
    ['8', 'heart'],
    ['9', 'heart'],
    ['10', 'heart'],
    ['J', 'heart'],
    ['Q', 'heart'],
    ['K', 'heart']
];
suits['diamonds'] = [
    // diamonds
    ['A', 'diamond'],
    ['2', 'diamond'],
    ['3', 'diamond'],
    ['4', 'diamond'],
    ['5', 'diamond'],
    ['6', 'diamond'],
    ['7', 'diamond'],
    ['8', 'diamond'],
    ['9', 'diamond'],
    ['10', 'diamond'],
    ['J', 'diamond'],
    ['Q', 'diamond'],
    ['K', 'diamond']
];
suits['clubs'] = [
    // clubs
    ['A', 'club'],
    ['2', 'club'],
    ['3', 'club'],
    ['4', 'club'],
    ['5', 'club'],
    ['6', 'club'],
    ['7', 'club'],
    ['8', 'club'],
    ['9', 'club'],
    ['10', 'club'],
    ['J', 'club'],
    ['Q', 'club'],
    ['K', 'club']
];

// build stock pile
var s = [];

// build waste pile
var w = [];

// build foundations
var spades = [];
var hearts = [];
var diamonds = [];
var clubs = [];

// build tableau
var t = [];
t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = [];

// build table
var table = [];
table['stock'] = s;
table['waste'] = w;
table['spades'] = spades;
table['hearts'] = hearts;
table['diamonds'] = diamonds;
table['clubs'] = clubs;
table['tab'] = t;

// initial face up cards
var playedCards =
    '#waste .card,' +
    '#fnd .card,' +
    '#tab .card:last-child';

// cache selectors
var $timer = d.querySelector('#score .timer');
var $timerSpan = d.querySelector('#score .timer span');
var $moveCount = d.querySelector('#score .move-count');
var $moveCountSpan = d.querySelector('#score .move-count span');
var $score = d.querySelector('#score .score');
var $scoreSpan = d.querySelector('#score .score span');
var $playPause = d.querySelector('#play-pause');
var $table = d.querySelector('#table');
var $upper = d.querySelector('#table .upper-row');
var $lower = d.querySelector('#table .lower-row');
var $stock = d.querySelector('#stock');
var $waste = d.querySelector('#waste');
var $fnd = d.querySelector('#fnd');
var $tab = d.querySelector('#tab');
var $autoWin = d.querySelector('#auto-win');

// other global vars
var clock = 0;
var time = 0;
var moves = 0;
var score = 0;
var bonus = 0;
var lastEventTime = 0;
var unplayedTabCards = [];

var clicks = 0; // set counter for counting clicks
var clickDelay = 200; // set delay for double click
var clickTimer = null; // set timer for timeout function
var activeCard
var dragIcon
var sourcecard
var destcard
var sourcePile
var destPile