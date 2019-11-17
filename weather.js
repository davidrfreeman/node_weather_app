const fetch = require('node-fetch')
// this imports the api key required to call the openweathermap api
const appId = require('../../.keys/openweather')

async function getIpInfo() {
  //function that calls the iopinfo.io api and returns an object with users location data
  const ipinfo = await fetch('https://ipinfo.io/json')
    .then(res => res.json())

  return ipinfo
}

async function getLatLon() {
  //function that uses the getIpInfo funciton's returned object and then splits the lat and long property into an array
  const ipInfoData = await getIpInfo()
  const location = ipInfoData.loc.split(',')

  return location
}

async function getWeatherData() {
  //function to query openweather api using lat and long to return location's weather data
  const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?'
  const [lat, lon] = await getLatLon()
  console.log(lat, lon)
  const weatherinfo = await fetch(`${weatherUrl}lat=${lat}&lon=${lon}&appId=${appId}`)
    .then(res => res.json())
  
  return weatherinfo
}

module.exports = {
  getIpInfo,
  getLatLon,
  getWeatherData
}

// function getWeather () { fetch('https://ipinfo.io/json', {
// mode: 'cors'
// })
// .then((res) => {
// res.json()
// .then((data) => {
//   let arr = data.loc.split(',')
//   lat = arr[0]
//   lon = arr[1]
//   console.log('Request successful')
// })
// })
// .then(() => {
//     fetch(`${weatherUrl}lat=${lat}&lon=${lon}&appId=${appId}`, {mode:'cors'})
// .then((response) => {
//   response.json()
//   .then((data) => {
//         //Show the users city name
//     document.querySelector('#loc').innerText = 'Location: '+ (data.name);
//     // Current Temp
//     document.querySelector('#temp').innerText = ((Math.round((data.main.temp - 273) * 1.8 + 32)) + '°');
//     // Max Temp
//     document.querySelector('#temp_max').innerText = (Math.round((data.main.temp_max - 273) * 1.8 + 32)) + '°';
//     // Min Temp
//     document.querySelector('#temp_min').innerText = (Math.round((data.main.temp_min - 273) * 1.8 + 32)) + '°';
//     // Weather Decription
//     document.querySelector('#desc').innerText = (data.weather[0].description);
//     // Current weather img
//     document.querySelector('#img').innerHTML = ('<img src="https://openweathermap.org/img/w/'+ data.weather[0].icon + '.png">');
//   })
// })
// })
// .catch((error) => {
// console.log('Request failed', error)
// })
// }
