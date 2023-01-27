// get html template for card
function getTemplate(card) {
    var r = card[0]; // get rank
    var s = card[1]; // get suit
    // get html template
    var html = d.querySelector('.template li[data-rank="' + r + '"]').innerHTML;
    // search and replace suit variable
    html = html.replace('{{suit}}', s);
    return html;
}