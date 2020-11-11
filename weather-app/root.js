let latitude;
let longitude;
$(document).ready(function () {
  navigator.geolocation.getCurrentPosition(function (position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let api =
      `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=d966d0f9f9b44ed48df9e2073cd18c4e`;
    $.getJSON(api, function (data) {
      console.log(data)
      let tempBut = false;
      let aqi = `AQI:${data.data[0].aqi}`
      let weather = data.data[0].weather.description;
      let location = `${data.data[0].city_name}, ${data.data[0].country_code}`
      let temperatureC = data.data[0].temp
      let temperatureF = temperatureC * 9 / 5 + 32
      let c = Math.floor(temperatureC)
      let f = Math.floor(temperatureF)
      let cTemp = "°Celcius"
      let fTemp = "°Fahrenheit"

      $("#aqi").html(aqi);
      $("#weather").html(weather);
      $("#location").html(location)
      $("#display").html(c + cTemp);

      $("#temperature").click(() => {
        if (tempBut === true) {
          $("#display").html(c + cTemp)
          return tempBut = false
        } else {
          $("#display").html(f + fTemp)
          return tempBut = true
        }
      })
    })
  })
})
