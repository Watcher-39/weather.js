//Init storage
const storage = new Storage();
//Get stored location data
const weatherLocatidon = storage.getLocationData();
//Init weather object
const weather = new weather(weatherLocation.city, weatherLocation.state);
//Init UI
const ui = new UIEvent();

//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').nodeValue;
  const state = document.getElementById('state').value;

  // change location
  weather.changeLocation(city, state);

  //Set location in LS
  storage.setLocationData(city, state);

  //Get and display weather
  getWeather();

  //Close modal
  $('#locModal').modal('hide');
})

function getWeather(){
  weather.getweather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}