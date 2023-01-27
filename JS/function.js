// 1. CREATE DECK
deck = create(deck, suits);
// 2. SHUFFLE DECK
deck = shuffle(deck);
// 3. DEAL DECK
table = deal(deck, table);
// 4. RENDER TABLE
render(table, playedCards);
// 5.PlayGame
play(table)