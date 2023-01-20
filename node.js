const mykey = 'c737eadcc1f96817b0fda252b6010c02'
let weather = {
  fetchWeather: function(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
    + city
    + "&units=imperial&appid="
    + mykey
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data))
  },
  displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed)
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" 
    + icon 
    + "@2x.png"
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°" + "F";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%"
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " mp/h "
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1980x1080/?"+ name + "')"
  },
  search: function (){
    this.fetchWeather(document.querySelector(".search-bar").value)
  }
}
document.querySelector(".search button")
.addEventListener("click", function () {
  weather.search();
})
document.querySelector(".search-bar").addEventListener("keyup", function(event) {
if (event.key == "Enter") {
  weather.search()
}
})
