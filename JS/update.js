// update piles
function update(pile, selector, playedCards, append) {
    var element = d.querySelector(selector);
    var children = element.children; // get children
    var grandParent = element.parentElement.parentElement; // get grand parent
    // reset pile
    element.innerHTML = '';
    // loop through cards in pile
    for (var card in pile) {
        card = pile[card];
        // get html template for card
        var html = getTemplate(card);
        // create card in pile
        createCard(card, selector, html, append);
    }
    // turn cards face up
    flipCards(playedCards, 'up');
    // count played cards
    var played = countPlayedCards(children);
    element.parentElement.dataset.played = played;
    // count all played cards for #tab and #fnd piles
    if (grandParent.id === 'tab' || grandParent.id === 'fnd') {
        var playedAll = parseInt(grandParent.dataset.played);
        if (isNaN(playedAll)) playedAll = 0;
        grandParent.dataset.played = playedAll + played;
    }
    // count unplayed cards
    var unplayed = countUnplayedCards(children);
    element.parentElement.dataset.unplayed = unplayed;
    // count all unplayed cards for #tab and #fnd piles
    if (grandParent.id === 'tab' || grandParent.id === 'fnd') {
        var unplayedAll = parseInt(grandParent.dataset.unplayed);
        if (isNaN(unplayedAll)) unplayedAll = 0;
        grandParent.dataset.unplayed = unplayedAll + unplayed;
    }
    return pile;
}

// flip cards
function flipCards(selectors, direction) {
    var els = d.querySelectorAll(selectors); // query all elements
    for (var e in els) { // loop through elements
        e = els[e];
        if (e.nodeType) {
            switch (direction) {
                case 'up':
                    if (e.dataset.played !== 'true') {
                        // if flipping over tableau card
                        if (e.dataset.pile === 'tab') {
                            // loop through unplayed cards
                            for (var card in unplayedTabCards) {
                                card = unplayedTabCards[card];
                                // if rank and suit matches
                                if (e.dataset.rank === card[0] &&
                                    e.dataset.suit === card[1])
                                    console.log("score 5 points")
                                    // updateScore(5);
                            }
                        }
                        e.className += ' up'; // add class
                        e.dataset.played = 'true'; // mark as played
                    }
                    break;
                case 'down':
                    e.className = 'card'; // reset class
                    delete e.dataset.played; // reset played data attribute
                default: break;
            }
        }
    }
    return;
}