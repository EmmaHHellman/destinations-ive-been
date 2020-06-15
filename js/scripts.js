function Destination (location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

let mthood = new Destination("Mt. Hood, Oregon", "Timberline Lodge", "Winter", "We went skiing and sledding.");
console.log(mthood)