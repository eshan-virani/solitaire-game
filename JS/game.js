// // gameplay
function play(table) {
    // bind click events
    bindClick(
        '#stock .card:first-child,' +
        '#waste .card:first-child,' +
        '#fnd .card:first-child,' +
        '#tab .card[data-played="true"]'
    );
    // // bind dbl click events
    bindClick(
        '#waste .card:first-child,' +
        '#tab .card:last-child',
        'double'
    );
    console.log('Make Your Move...');
    console.log('......');
}

// bind click events
function bindClick(selectors, double) {
    var elements = d.querySelectorAll(selectors); // query all elements
    // loop through elements
    for (var e in elements) {
        var element = elements[e];
        // add event listener
        if (element.nodeType) {
            element.addEventListener('mousedown', select);
            element.addEventListener('dragstart', handleDragStart);
            element.addEventListener('dragend', handleDragEnd);
        }
    }
    return;
}