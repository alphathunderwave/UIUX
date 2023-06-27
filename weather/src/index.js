import { api } from "./api.js";

fetch("https://api.weatherapi.com/v1/current.json?key=" + api + "&q=buffalo", {mode:'cors'})
.then(function(response) {
  return response.json();
})

  .then(function (response) {
    console.log(response.current.feelslike_f)
  })
.catch(function (err) {
    // Error :(
    console.log(err);
  });
