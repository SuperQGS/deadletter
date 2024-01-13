var worldactionsperturn = 4;
function worldTurn() {
    //generate random number between 0 and 2
    let random = Math.floor(Math.random() * 3);

    if (random == 0) {
        addCoyote();
    }
    else if (random == 1) {
        
        let node = getRandomNode();
        while (nodes[node].coyotes == 0) { //if no coyotes, try again
            node = getRandomNode();
        }
        moveCoyotes(node);
    }
    else if (random == 2) {
        spreadBlight();
    }

    renderGraph();
}

function addCoyote() {
    //pick random node & increase coyotes by one
    let node = getRandomNode();
    nodes[node].coyotes += 1;
    alert("A coyote has been spotted at the " + nodes[node].name + ".");
}

function moveCoyotes(node) {
    //move coyotes in a random direction

    while (nodes[node].coyotes == 0) { //if no coyotes, try again
        return;
    }

    let link = getRandomLink(node); //grab random link from node

    let otherSidee = getOtherSideOfLink(node, link); //grab node on other side of link

    if (nodes[node].coyotes > 1) {
        alert("A pack of " + nodes[node].coyotes + " coyotes moved from the " + nodes[node].name + " to the " + nodes[otherSidee].name + ".");
    } else {
        alert("A lone coyote moved from the " + nodes[node].name + " to the " + nodes[otherSidee].name + ".");
    }
    

    nodes[otherSidee].coyotes += nodes[node].coyotes; //move coyotes to other side of link
    nodes[node].coyotes = 0; //remove coyotes from original node

}

var blightDescriptor = [
    "",
    " is now slightly blighted, but still driveable.",
    " is now mostly blighted, you will need high beams to drive.",
    " is now completely blighted, you cannot drive there anymore.",
]
var blightColors = [
    "black",
    "yellow",
    "orange",
    "red",
]
function spreadBlight() {
    let node = getRandomNode(); //grab random node
    let link = getRandomLink(node); //grab random link from node

    links[link].blight += 1; //increase blight on link

    if (links[link].blight > 3) {
        links[link].blight = 3;
    }

    let otherSide = getOtherSideOfLink(node, link); //grab node on other side of link
    alert("The road between the " + nodes[node].name + " and the " + nodes[otherSide].name + blightDescriptor[links[link].blight]);

}