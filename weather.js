const fetch = require('node-fetch')

// fetch('https://api.github.com/users/github')
//   .then(res => res.json())
//   .then(json => console.log(json))

const lat = ''
const lon = ''

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather'

let ipinfo = {}
let loc

async function getIpInfo() {
  ipinfo = await fetch('https://ipinfo.io/json')
    .then(res => res.json())

    return ipinfo
}

async function getWeatherData() {
  let weatherinfo = await fetch(`${weatherUrl}lat=${lat}&lon=${lon}&appId=${appId}`)
    .then(res => res.json())
    
    return weatherinfo
}

// getIpInfo()

// module.exports = { 
//   getIpInfo : getIpInfo,
//   getWeatherData : getWeatherData
// }

module.exports = exports = getIpInfo

  // let lat,
  // lon,
  // weatherUrl = "https://api.openweathermap.org/data/2.5/weather?",
  // appId = "5ff51663eb541e74296530b17a1eaf5e"

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
