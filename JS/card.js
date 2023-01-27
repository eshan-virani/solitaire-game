// size cards
function sizeCards(selector = '.pile', ratio = 1.4) {
    var s = selector;
    var r = ratio;
    var element = d.querySelector(s); // query element
    var h = element.offsetWidth * r; // get height of element
    // set row heights
    $upper.style.height = h + 50 + 'px';
    // $lower.style.height = h + 120 + 'px';
    // set height of elements
    var els = d.querySelectorAll(s); // query all elements
    for (var e in els) { // loop through elements
        element = els[e];
        if (element.nodeType) element.style.height = h + 'px'; // set height in css
    }
}

// get face down cards in tableau pile
function getUnplayedTabCards() {
    // reset array
    unplayedTabCards = [];
    // get all face down card elements
    var els = d.querySelectorAll('#tab .card:not([data-played="true"])');
    for (var e in els) { // loop through elements
        element = els[e];
        if (element.nodeType) {
            unplayedTabCards.push([element.dataset.rank, element.dataset.suit]);
        }
    }
    return unplayedTabCards;
}

// check for played cards
function checkForPlayedCards(playedCards) {
    // query
    var els = d.querySelectorAll('.card[data-played="true"]');
    for (var e in els) { // loop through elements
        element = els[e];
        if (element.nodeType) {
            var r = element.dataset.rank;
            var s = element.dataset.suit;
            playedCards += ', .card[data-rank="' + r + '"][data-suit="' + s + '"]';
        }
    }
    return playedCards;
}

// check for empty piles
function checkForEmptyPiles(table) {
    // reset empty data on all piles
    var els = d.querySelectorAll('.pile'); // query elements
    for (var e in els) { // loop through elements
        element = els[e];
        if (element.nodeType) {
            delete element.dataset.empty;
        }
    }
    // declare var with fake pile so we always have one
    var emptyPiles = '#fake.pile';
    // check spades pile
    if (table['spades'].length === 0) {
        emptyPiles += ', #fnd #spades.pile';
    }
    // check hearts pile
    if (table['hearts'].length === 0) {
        emptyPiles += ', #fnd #hearts.pile';
    }
    // check diamonds pile
    if (table['diamonds'].length === 0) {
        emptyPiles += ', #fnd #diamonds.pile';
    }
    // check clubs pile
    if (table['clubs'].length === 0) {
        emptyPiles += ', #fnd #clubs.pile';
    }
    // check tableau piles
    var tabs = table['tab'];
    // loop through tableau piles
    for (var i = 1; i <= 7; i++) {
        // check tabeau pile
        if (tabs[i].length === 0) {
            emptyPiles += ', #tab li:nth-child(' + i + ').pile';
        }
    }
    // mark piles as empty
    els = d.querySelectorAll(emptyPiles); // query elements
    for (var e in els) { // loop through elements
        element = els[e];
        if (element.nodeType) {
            element.dataset.empty = 'true'; // mark as empty
        }
    }
    return emptyPiles;
}