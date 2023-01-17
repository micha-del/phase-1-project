function getWeather(longitude, latitude, title) {

    const longLat = `https://www.7timer.info/bin/astro.php?lon=${longitude}&lat=${latitude}&ac=0&unit=metric&output=json&tzshift=0`;
    const area = `AIzaSyABhd9iDjrzWO-fGETW82-Rj6LN-CljREg`
    fetch(longLat)
      .then(response => response.json())
      .then(data => {
  
        let html = `<h3>Weather for ${title}</h3>`;
  
        data.dataseries.forEach((item, index) => {
          html += (`
          <div class="day">
            <strong>Day ${1 + index}</strong>
            <div>Cloud Cover: ${item.cloudcover}</div>
            <div>Wind Direction: ${item.wind10m.direction}</div>
            <div>Wind Speed: ${item.wind10m.speed}</div>
            <div>Temp: ${item.temp2m}</div>
          </div>
        `);
        });
  
        weather.innerHTML = html;
  
      });
  }
 getWeather(Math.random()*360-180)