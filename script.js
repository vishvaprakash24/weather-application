// functions that are used
// function for calculating the Wind Direction
function calculateWindDirection(angle) {
  // Convert the angle to a positive value between 0 and 360
  angle = ((angle % 360) + 360) % 360;

  // Define an array of cardinal directions
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];

  // Calculate the index in the directions array based on the angle
  const index = Math.floor(angle / 22.5);

  // Return the corresponding cardinal direction
  return directions[index];
}


// function for finding moon condition (status of the moon)
function getMoonCondition(moonPhase) {
  if (moonPhase == 0) {
    return "New moon";
  } else if (moonPhase > 0 && moonPhase < 0.25) {
    return "waxing crescent moon";
  } else if (moonPhase == 0.25){
      return "first quarter moon";
  } else if (moonPhase > 0.25 && moonPhase < 0.5) {
    return "waxing gibbous moon";
  } else if (moonPhase == 0.5){
    return "Full moon";
  } else if (moonPhase > 0.5 && moonPhase < 0.75) {
    return "waning gibbous moon";
  } else if (moonPhase == 0.75){
    return "Last quarter moon";
  } else if (moonPhase == 0.75){
    return "waning crescent moon";
  } else {
    return "Invalid moon phase value";
  }
}

// function for uvIndex Description
function getUVIndexDescription(uvIndex) {
  if (uvIndex >= 0 && uvIndex < 3) {
    return "Low UV index. Minimal risk of harm.";
  } else if (uvIndex >= 3 && uvIndex < 6) {
    return "Moderate UV index. Some risk of harm. Use sunscreen and protective clothing.";
  } else if (uvIndex >= 6 && uvIndex < 8) {
    return "High UV index. High risk of harm. Use sunscreen, protective clothing, and seek shade.";
  } else if (uvIndex >= 8 && uvIndex < 11) {
    return "Very high UV index. Very high risk of harm. Use broad-spectrum sunscreen, protective clothing, and seek shade.";
  } else if (uvIndex >= 11) {
    return "Extreme UV index. Extreme risk of harm. Take all necessary precautions to protect your skin.";
  } else {
    return "Invalid UV index value.";
  }
}

// function for visibility Description
function getVisibilityDescription(visibility) {
  if (visibility >= 0 && visibility < 1) {
    return "Very poor visibility. Objects are barely visible, if at all.";
  } else if (visibility >= 1 && visibility < 3) {
    return "Poor visibility. Objects are difficult to see.";
  } else if (visibility >= 3 && visibility < 5) {
    return "Moderate visibility. Objects can be seen, but with some difficulty.";
  } else if (visibility >= 5 && visibility < 10) {
    return "Good visibility. Objects are generally clear and visible.";
  } else if (visibility >= 10) {
    return "Excellent visibility. Objects are very clear and easily visible.";
  } else {
    return "Invalid visibility value.";
  }
}
// function for am pm conversion
function convertToAMPM(time) {
  // Split the time string into hours, minutes, and seconds
  var timeParts = time.split(":");
  var hours = parseInt(timeParts[0]);
  var minutes = parseInt(timeParts[1]);
  var seconds = parseInt(timeParts[2]);

  // Determine the AM/PM designation
  var ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;

  // Create the formatted time string
  var formattedTime = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0") + " " + ampm;

  return formattedTime;
}


// function for time formatting
function timeFormatter(hours, minutes){
  let meridiem = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours<10? '0'+ hours : hours;
  hours = hours ? hours : 12;
  return hours + ':' + minutes.toString().padStart(2, '0') + ' ' + meridiem;
}

// function for weather icon
// visit: https://www.visualcrossing.com/resources/documentation/weather-api/defining-icon-set-in-the-weather-api/

function setWeatherIcon(condition, img_id) {
  const weatherIcon = document.getElementById(img_id);

  // Set the appropriate src attribute based on the weather condition
  switch (condition) {
    case 'clear-day':
      weatherIcon.src = './glassy-icons/full_sun.svg';
      break;
    case 'clear-night':
      weatherIcon.src = './glassy-icons/full_moon.svg';
      break;
    case 'partly-cloudy-day':
      weatherIcon.src = './glassy-icons/cloudy.svg';
      break;
    case 'partly-cloudy-night':
      weatherIcon.src = './glassy-icons/cloudy_night.svg';
      break;
    case 'cloudy':
      weatherIcon.src = './glassy-icons/cloudy.svg';
      break;
    case 'rain':
      weatherIcon.src = './glassy-icons/thunder_rain.svg';
      break;
    case 'fog':
      weatherIcon.src = './glassy-icons/fog.svg';
      break;
    // Add more cases for other weather conditions if needed
    default:
      // Handle a default case or show a generic weather icon
      weatherIcon.src = './glassy-icons/wind-snow.svg';
      break;
  }
}
function miniIconSetter(condition) {

  // Set the appropriate src attribute based on the weather condition
  switch (condition) {
    case 'clear-day':
      return 'full_sun.svg';
    case 'clear-night':
      return 'full_moon.svg';
    case 'partly-cloudy-day':
      return 'cloudy.svg';
    case 'partly-cloudy-night':
      return 'cloudy_night.svg';
    case 'cloudy':
      return 'cloudy.svg';
    case 'rain':
      return 'thunder_rain.svg';
    case 'fog':
      return 'fog.svg';
    // Add more cases for other weather conditions if needed
    default:
      // Handle a default case or show a generic weather icon
      return 'wind-snow.svg';
    }
}

const elements = document.querySelectorAll('.hide');
const container = document.querySelector(".size");

function removeClassFromElements() {
  elements.forEach(element => {
    element.classList.remove('hide');
  });
  container.classList.remove('size');
}



let searchBox = document.querySelector(".container #sidebar .searchForm .searchBox");
let form = document.querySelector(".container #sidebar .searchForm");
  
let curDate = new Date();
let date = curDate.getDate();
if(date<10){
  date = "0"+ date;
}
let month =  curDate.getMonth()+1;
if (month<10){
    month = "0"+ month;
}
let year = curDate.getFullYear();

let hours = curDate.getHours();
let minutes = curDate.getMinutes();
let seconds = curDate.getSeconds();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[curDate.getDay()];

let formattedTime = timeFormatter(hours, minutes)
let currentDateDayTime = `${date}-${month}-${year} ${day}, ${formattedTime}`


async function checkWeather(city){
  // console.log(city);
  let apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${year}-${month}-${date}?key=TA7L87GUWC62REXS9W6H6NHZ9&unitGroup=metric`
  const response = await fetch(apiUrl);
  var data = await response.json();
  if(data.status===404){
      console.log("err");
  }else{
      console.log(data);
      // console.log(data.days[0].icon)
      setWeatherIcon(data.days[0].icon, 'mainWeatherIcon');
      removeClassFromElements();

      let str = ""
      hourArr=data.days[0].hours;
      for(let index in hourArr){
          str+=`<div class="card">
          <p class="time">${hourArr[index].datetime.slice(0,5)}</p>
          <div class="img-box"><img src="./glassy-icons/${miniIconSetter(hourArr[index].icon)}" alt=""></div>
          <p class="temp">${hourArr[index].temp + "°C"}</p>
      </div>`
      }
      document.getElementById("hourCardContainer").innerHTML = str;
      // console.log(json.address)
      document.querySelector(".container #main h1").textContent = data.currentConditions.conditions;
      document.querySelector(".container #sidebar .temp").textContent = data.currentConditions.temp + "°C";
      document.querySelector(".dateDayTime").textContent= currentDateDayTime;
      
      document.querySelector(".container #sidebar .location p").textContent = data.resolvedAddress;
      document.querySelector(".container #sidebar .maxmin h3 .maxT").textContent = data.days[0].tempmax + "°C";
      document.querySelector(".container #sidebar .maxmin h3 .minT").textContent = data.days[0].tempmin + "°C";
      document.querySelector(".container #sidebar .maxmin p").textContent = data.days[0].description;
      document.querySelector("#windSpeed").textContent = data.days[0].windspeed;
      document.querySelector("#windDirection").textContent = data.days[0].winddir;
      document.querySelector("#dirDesc").textContent = calculateWindDirection(data.days[0].winddir);
      document.querySelector("#humidity").textContent = data.days[0].humidity;
      document.querySelector("#sunRise").textContent = convertToAMPM(data.days[0].sunrise);
      document.querySelector("#sunSet").textContent = convertToAMPM(data.days[0].sunset);
      document.querySelector("#visibility").textContent = data.days[0].visibility;
      document.querySelector("#visDesc").textContent = getVisibilityDescription(data.days[0].visibility);
      document.querySelector("#uvIndex").textContent = data.days[0].uvindex;
      document.querySelector("#uvDesc").textContent = getUVIndexDescription(data.days[0].uvindex);
      document.querySelector("#moonphase").textContent = data.days[0].moonphase;
      document.querySelector("#moonDesc").textContent = getMoonCondition(data.days[0].moonphase);

    }
}
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  checkWeather(searchBox.value);

})


