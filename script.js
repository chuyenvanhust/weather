document.addEventListener("DOMContentLoaded", function() {
    let input = document.getElementById("city");
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const city = input.value;
            const apiKey = '3dcbddfc35175172ddd18bfdfd05301b';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            

            

            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);

                    const temperature = data.main.temp;
                    const humidity = data.main.humidity;
                    const windSpeed = data.wind.speed;
                    const description = data.weather[0].description;
                    const cname =city;

                    const temp = document.getElementById("temperature");
                    const hum = document.getElementById("humidity");
                    const win = document.getElementById("windspeed");
                    const desc = document.getElementById("description");
                    const ctname = document.getElementById("citynamehere");

                    temp.innerHTML = `<p>Temperature: ${temperature} °C</p>`;
                    hum.innerHTML = `<p>Humidity: ${humidity}%</p>`;
                    win.innerHTML = `<p>Wind Speed: ${windSpeed} m/s</p>`;
                    desc.innerHTML = `<p>Description: ${description}</p>`;
                   ctname.innerHTML =`<p>${cname}</p>`;
                    console.log(`Temperature: ${temperature}°C`);
                    console.log(`Weather: ${description}`);
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
        }
    });
});
