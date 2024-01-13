function takePlayerTurn() {
    mailtruck.actions -= 1;

    document.getElementById("actions-remaining").innerHTML = (mailtruck.actions) + " actions until end of turn:";
    renderGraph();
    
    if (mailtruck.actions == 0) {
        worldTurn();
        mailtruck.actions = 4;
    }
}


function actionPanel(action) {
    let elements = document.getElementsByClassName("action-panel");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }

    if (action == "drive") {
        document.getElementById("drive-panel").style.display = "block";
    }
    else if (action == "honk") {
        document.getElementById("honk-panel").style.display = "block";
    }
    else if (action == "headlights") {
        document.getElementById("headlights-panel").style.display = "block";
    }
    else if (action == "items") {
        document.getElementById("items-panel").style.display = "block";
    }

}


/**
 * Drives the mail truck to a connected location based on the specified link.
 * Updates the mail truck's location and prints information on where you can drive next.
 *
 * @param {string} link - string id of the link you are driving on
 */
function drive(link) {
    
    const start = mailtruck.location;

    let location = getOtherSideOfLink(start, link);
    
    mailtruck.location = location;
    document.getElementById("current-location").innerHTML = nodes[location].name;
    document.getElementById("coyotes-here").innerHTML = nodes[location].coyotes + " coyotes here.";

    //clear drive options list
    document.getElementById("drive-options").innerHTML = "";

    for (let i = 0; i < nodes[location].links.length; i++) {
        let option = nodes[location].links[i];
        let otherSide = getOtherSideOfLink(location, option);
        document.getElementById("drive-options").innerHTML += "<li onclick=\"drive('" + option + "')\">Drive to " + nodes[otherSide].name + ".</li>";
    }
    
    takePlayerTurn();
}


function honk() {

    moveCoyotes(mailtruck.location);
    document.getElementById("coyotes-here").innerHTML = nodes[location].coyotes + " coyotes here."; //update coyotes here


    takePlayerTurn();

}


//start game
drive("postoffice1-gas1");