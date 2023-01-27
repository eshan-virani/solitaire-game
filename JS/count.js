// count played cards
function countPlayedCards(cards) {
    var played = 0;
    // loop through cards
    for (var card in cards) {
        card = cards[card];
        if (card.nodeType) {
            // check if card has been played
            if (card.dataset.played === 'true') played++;
        }
    }
    return played;
}

// count unplayed cards
function countUnplayedCards(cards) {
    var unplayed = 0;
    // loop through cards
    for (var card in cards) {
        card = cards[card];
        if (card.nodeType) {
            // check if card has been played
            if (card.dataset.played !== 'true') unplayed++;
        }
    }
    return unplayed;
}