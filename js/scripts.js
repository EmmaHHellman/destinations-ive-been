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

$(document).ready(function(){
  
})