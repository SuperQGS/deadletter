/**
* Gets node on the other side of link
* @param {string} start - string id of the node you are starting on
* @param {string} link - string id of the link you are driving on
* @return {string} - string id for the node that is on the other side of the link
*/
function getOtherSideOfLink(start, link) { //
    
    link = links[link];

    if (link.nodes[0] == start) {
        return link.nodes[1];
    } else {
        return link.nodes[0];
    }

}

/**
* Gets random node
* @return {string} - string id for a random node. !!!is string id called a key?
*/
function getRandomNode() {
    // Get all node keys
    var keys = Object.keys(nodes);
    
    // Choose a random key
    var randomKey = keys[Math.floor(Math.random() * keys.length)];
    
    // Return the key of the random node
    return randomKey;
}

/**
* Gets random link
* @param {string} start - string id of the node you are starting on.
* @return {string} - string id for a random link. 
*/
function getRandomLink(start) {
    let nodelinks = nodes[start].links;
    var randomLink = nodelinks[Math.floor(Math.random() * nodelinks.length)];
    return randomLink;
}