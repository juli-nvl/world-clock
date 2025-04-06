function updateTime() {
  let paris = document.querySelector("#paris");
  let parisDate = paris.querySelector(".date");
  let parisTime = paris.querySelector(".time");
  let parisTimezone = moment().tz("Europe / Paris");
  parisDate.innerHTML = parisTimezone.format("dddd, MMMM Do YYYY");
  parisTime.innerHTML = parisTimezone.format("hh:mm:ss [<small>]A [</small>]");

  let newYork = document.querySelector("#new-york");
  let newYorkDate = newYork.querySelector(".date");
  let newYorkTime = newYork.querySelector(".time");
  let newYorkTimezone = moment().tz("America/New_York");
  newYorkDate.innerHTML = newYorkTimezone.format("dddd, MMMM Do YYYY");
  newYorkTime.innerHTML = newYorkTimezone.format(
    "hh:mm:ss [<small>]A [</small>]"
  );

  let saoPaulo = document.querySelector("#sao-paulo");
  let saoPauloDate = saoPaulo.querySelector(".date");
  let saoPauloTime = saoPaulo.querySelector(".time");
  let saoPauloTimezone = moment().tz("America/Sao-Paulo");
  saoPauloDate.innerHTML = saoPauloTimezone.format("dddd, MMMM Do YYYY");
  saoPauloTime.innerHTML = saoPauloTimezone.format(
    "hh:mm:ss [<small>]A [</small>]"
  );

  let tokyo = document.querySelector("#tokyo");
  let tokyoDate = tokyo.querySelector(".date");
  let tokyoTime = tokyo.querySelector(".time");
  let tokyoTimezone = moment().tz("Asia/Tokyo");
  tokyoDate.innerHTML = tokyoTimezone.format("dddd, MMMM Do YYYY");
  tokyoTime.innerHTML = tokyoTimezone.format("hh:mm:ss [<small>]A [</small>]");

  let lagos = document.querySelector("#lagos");
  let lagosDate = lagos.querySelector(".date");
  let lagosTime = lagos.querySelector(".time");
  let lagosTimezone = moment().tz("Africa/Lagos");
  lagosDate.innerHTML = lagosTimezone.format("dddd, MMMM Do YYYY");
  lagosTime.innerHTML = lagosTimezone.format("hh:mm:ss [<small>]A [</small>]");

  let sydney = document.querySelector("#sydney");
  let sydneyDate = sydney.querySelector(".date");
  let sydneyTime = sydney.querySelector(".time");
  let sydneyTimezone = moment().tz("Australia/Sydney");
  sydneyDate.innerHTML = sydneyTimezone.format("dddd, MMMM Do YYYY");
  sydneyTime.innerHTML = sydneyTimezone.format(
    "hh:mm:ss [<small>]A [</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let city = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let newDisplay = document.querySelector("#default-cities");
  newDisplay.innerHTML = `
       <div>
         <h2>${city}</h2>
         <div class="date">${cityTime.format("MMMM	Do YYYY")}</</div>
       </div>
       <div class="time">${cityTime.format(
         "hh:mm:ss [<small>]A [</small>]"
       )}</div>
     </div>`;
}

setInterval(updateTime, 1000);

let selectCityElement = document.querySelector("#selectCity");
addEventListener("change", updateCity);
