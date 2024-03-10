// Пример API запроса: https://api.openweathermap.org/data/2.5/weather?q=Москва&appid=59aaed6f10d8ae0565183dd571a3b596&units=metric
// Пример ссылки на иконку: http://openweathermap.org/img/wn/${icon}.png

const apiURL = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "59aaed6f10d8ae0565183dd571a3b596";

function pageLoaded() {
    const input = document.querySelector("#input");
    const btn = document.querySelector("#button");
    const output = document.querySelector("#output");

    function sendRequest() {
        if (!validateInput()) return ;
        let requestURL = formatURL();
        fetch(requestURL)
            .then(response => {
                return response.json();
            })
            .then(data => {
                writeOutput(formatOutput(data));
            })
    }
    function formatURL() {
        let url = new URL(apiURL);
        url.searchParams.set("q", input.value);
        url.searchParams.set("appid", apiKey);
        url.searchParams.set("units", 'metric');
        url.searchParams.set("lang", 'ru');
        return url;
    }
    function validateInput() {
        return input.value !== ''
    }

    function formatOutput(data) {
        let output = `
      <p>${data.main.temp} &deg;C</p>
      <p>${data.weather[0].main}</p>
      <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" />
    `
        return output;
    }

    function writeOutput(message) {
        output.innerHTML = message;
    }

    btn.addEventListener("click", sendRequest);
}


document.addEventListener("DOMContentLoaded", pageLoaded);