var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var maxMin = document.querySelector('.max-min');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var feelsLike = document.querySelector('.feelsLike')


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=2855621438f1ec51c50f80281062f35e')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var temp_max = data['main']['temp_max'];
  var temp_min = data['main']['temp_min'];
  var feels_like = data['main']['feels_like']


  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue+" Kalvin";
  feelsLike.innerHTML = "Feels Like"+ feels_like;
  maxMin.innerHTML = temp_max+"/"+temp_min;
  input.value ="";

  console.log(data);

})

.catch(err => alert("Wrong city name!"));
})
