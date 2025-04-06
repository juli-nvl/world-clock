function updateTime() {
  let paris = document.querySelector("#paris");
  let parisDate = paris.querySelector(".date");
  let parisTime = paris.querySelector(".time");
  let parisTimezone = moment().tz("Europe / Paris");
  parisDate.innerHTML = parisTimezone.format("dddd, MMMM Do YYYY");
  parisTime.innerHTML = parisTimezone.format("hh:mm:ss [<small>]A [</small>]");
}

setInterval(updateTime, 1000);
