// create deck
function create(deck, suits) {
    console.log('Creating Deck...');
    // loop through each suit
    for (var suit in suits) {
        suit = suits[suit];
        // loop through each card in suit
        for (var card in suit) {
            card = suit[card];
            deck.push(card); // push card to deck
        }
    }
    return deck;
}

// shuffle deck
function shuffle(deck) {
    console.log('Shuffling Deck...');
    // declare vars
    var i = deck.length, temp, rand;
    // while there remain elements to shuffle
    while (0 !== i) {
        // pick a remaining element
        rand = Math.floor(Math.random() * i);
        i--;
        // and swap it with the current element
        temp = deck[i];
        deck[i] = deck[rand];
        deck[rand] = temp;
    }
    return deck;
}

// deal deck
function deal(deck, table) {
    console.log('Dealing Deck...');
    // move all cards to stock
    table['stock'] = deck;
    // build tableau
    var tabs = table['tab'];
    // loop through 7 tableau rows
    for (var row = 1; row <= 7; row++) {
        // loop through 7 piles in row
        for (var pile = row; pile <= 7; pile++) {
            // build blank pile on first row
            if (row === 1) tabs[pile] = [];
            // deal card to pile
            move(table['stock'], tabs[pile], false);
        }
    }
    return table;
}

// move card
function move(source, dest, pop, selectedCards = 1) {
    if (pop !== true) {
        var card = source.shift(); // take card from bottom
        dest.push(card); // push card to destination pile
    } else {
        while (selectedCards) {
            // take card from the top of selection
            var card = source[source.length - selectedCards];
            // remove it from the selected pile
            source.splice(source.length - selectedCards, 1);
            // put it in the destination pile
            dest.push(card);
            // decrement
            selectedCards--;
        }
    }
    return;
}

// render table
function render(table, playedCards) {
    console.log('Rendering Table...');

    // check for played cards
    playedCards = checkForPlayedCards(playedCards);

    // check for empty piles
    emptyPiles = checkForEmptyPiles(table);

    // update stock pile
    update(table['stock'], '#stock ul', playedCards, true);
    // update waste pile
    update(table['waste'], '#waste ul', playedCards);
    // update spades pile
    update(table['spades'], '#spades ul', playedCards);
    // update hearts pile
    update(table['hearts'], '#hearts ul', playedCards);
    // update diamonds pile
    update(table['diamonds'], '#diamonds ul', playedCards);
    // update clubs pile
    update(table['clubs'], '#clubs ul', playedCards);
    // update tableau
    var tabs = table['tab'];
    // loop through tableau piles
    for (var i = 1; i <= 7; i++) {
        // update tableau pile
        update(tabs[i], '#tab li:nth-child(' + i + ') ul', playedCards, true);
    }

    // get unplayed tab cards
    unplayedTabCards = getUnplayedTabCards();

    // size cards
    sizeCards();

    // show table
    $table.style.opacity = '100';

    console.log('Table Rendered:', table);
    return;
}

// create card in pile
function createCard(card, selector, html, append) {
    var r = card[0]; // get rank
    var s = card[1]; // get suit
    // get pile based on selector
    if (selector.includes('#stock')) var p = 'stock';
    if (selector.includes('#waste')) var p = 'waste';
    if (selector.includes('#spades')) var p = 'spades';
    if (selector.includes('#hearts')) var p = 'hearts';
    if (selector.includes('#diamonds')) var p = 'diamonds';
    if (selector.includes('#clubs')) var p = 'clubs';
    if (selector.includes('#tab')) var p = 'tab';
    var element = d.createElement('li'); // create li element
    element.className = 'card'; // add .card class to element
    element.dataset.rank = r; // set rank atribute
    element.dataset.suit = s; // set suit attribute
    element.dataset.pile = p; // set pile attribute;
    element.dataset.selected = 'false'; // set selected attribute
    // element.draggable = 'true'; // set selected attribute
    element.innerHTML = html; // insert html to element
    // query for pile
    var pile = d.querySelector(selector);
    // append to pile
    if (append) pile.appendChild(element);
    // or prepend to pile
    else pile.insertBefore(element, pile.firstChild);
    return;
}