function Travels() {
 this.destinations = [];
 this.currentId = 0;
}

Travels.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations.push(destination);
}

Travels.prototype.assignId = function () {
  this.currentId += 1;
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

Travels.prototype.deleteDestination = function(id) {
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
    htmlForDestinationInfo += "<li id=" + destination.id + ">" + destination.location + " " + destination.landmark + " " + destination.timeOfYear + " " + destination.activity + "</li>";
  });
  destinationList.html(htmlForDestinationInfo);
};

function showDestination(destinationId) {
  const destination = destination.findDestination(destinationId);
  $("#show-destinations").show();
  $(".destination").html(destination.location);
  $(".landmark").html(destination.landmark);
  $(".timeOfYear").html(destination.timeOfYear);
  $(".activities").html(destination.activity);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + + destination.id + ">Delete</button>");
}

function attachDestinationListeners() {
  $("ul#destinations").on("click", "li", function() {
   showDestination(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function(){
    destination.deleteDestination(this.id)
   $("#show-destinations").hide();
   displayDestinationDetails(destination);
  });
};

$(document).ready(function() {
  attachDestinationListeners();
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