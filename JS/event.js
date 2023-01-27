//select card
function select(event) {
    activeCard = this
    activeCard.setAttribute("draggable", "true");
    activeCard.setAttribute("data-selected", "true");
}

//start drag
function handleDragStart(e) {
    dragIcon = this;
}

function handleDragEnd(){
    activeCard.setAttribute("data-selected", "false");
}