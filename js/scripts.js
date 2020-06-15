function Travels() {
 this.destinations = [];
 this.currentid = 0;
}

Travels.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations.push(destination);
}

Travels.prototype.assignId = function () {
  this.currentid += 1;
  return this.currentId;
}

Travels.prototype.findDestination = function(id) {
  for(let i=0; i<this.destinations.length; i++) {
  if (this.destinations[i]) {
    if(this.destinations[i].id == id) {
    return this.destinations[i];
    }
  }
};
    return false;
}

Travels.prototype.deleteContact = function(id) {
  for(let i=0; i<this.destinations.length; i++) {
    if(this.destinations[i]) {
      if(this.destinations[i].id == id) {
        delete this.destinations[i];
        return true;
        }
      }
    };
    return false; 
}

function Destination(location, landmark, timeOfYear, activities) { 
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.activity = activities;
}

Destination.prototype.fullList = function() {
  return this.location + " " + this.landmark + " " + this.timeOfYear + " " + this.activity;
}

//Below: User-Interface Logic

let destination = new Travels();

function displayDestinationDetails(travelsToDisplay) {
  let destinationList = $("ul#destinations");
  let htmlForDestinationInfo = "";
  travelsToDisplay.destinations.forEach(function(destination) {
    htmlForDestinationInfo += "<li id=" + destination.id + ">" + destination.destination + " " + destination.landmark + " " + destination.timeOfYear + " " + destination.activities + "</li>";
  });
  destinationList.html(htmlForDestinationInfo);
};

$(document).ready(function() {
  $("form#new-destination").submit(function(event) {
    event.preventDefault();
    const inputtedDestination = $("input#destination").val();
    const inputtedLandmark = $("input#landmark").val();
    const inputtedtimeOfYear = $("input#timeOfYear").val();
    const inputtedActivities = $("input#activities").val();
    let newDestination = new Destination(inputtedDestination, inputtedLandmark, inputtedtimeOfYear, inputtedActivities);
    destination.addDestination(newDestination);
    displayDestinationDetails(destination);
  })
})