var valueSearch = document.getElementById("valueSearch");
var temperature = document.getElementById("temperature");
var city = document.getElementById("city");
var Clouds = document.getElementById("Clouds");
var Humidity = document.getElementById("Humidity");
var Pressure = document.getElementById("Pressure");
var desription = document.querySelector(".desription");
var form = document.querySelector("form");
var main = document.querySelector("main");
form.addEventListener("submit",(event)=>{
event.preventDefault();
if(valueSearch.value !=""){
  searchWeather();
}
})
var id = "9505fd1df737e20152fbd78cdb289b6a"
var url = "https://api.openweathermap.org/data/2.5/weather?lat=35.3967&lon=74.6311&appid=c153479685c47f1b34a83591f3b1acbe"
var searchWeather = ()=>{
  fetch(url + "&q="+valueSearch.value)
  .then(responsive => responsive.json())
  .then(data =>{
    console.log(data);
    if(data.cod == 200){
      city.querySelector("figcaption").innerHTML= data.name;
      temperature.querySelector("img").src =`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      temperature.querySelector("figcaption").innerHTML = data.main.temp;
      desription.innerHTML = data.weather[0].description;
      Clouds.innerHTML = data.clouds.all
      Humidity.innerHTML = data.main.humidity
      Pressure.innerHTML = data.main.pressure

    } else{
      main.classList.add("error")
      setTimeout(()=>{
        main.classList.remove("error")
      },1000)
    }
    valueSearch.value = ""
   

  })}
  var cityAdd = ()=>{
    valueSearch.value = "karachi"
    searchWeather()
  }
  cityAdd();


