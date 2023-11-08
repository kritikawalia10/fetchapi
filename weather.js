//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
var days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
var month = ['January','February','March','April','May','June','July','August','September','October','November','December'];

fetch("https://api.openweathermap.org/data/2.5/weather?q=bengaluru,ind&APPID=1342f8dd595eda677ca40143519800de")
.then((data)=> data.json()).then((parsedData)=>{
  console.log(parsedData);

  const nameOfLocation=parsedData.name;
  document.getElementsByClassName('location')[0].textContent=nameOfLocation;

 
  const date = new Date(parsedData.dt*1000);
  document.getElementsByClassName('date')[0].textContent=
 days[date.getDay()-1]+' '+date.getDate() +' '+month[date.getMonth()]+' '+date.getFullYear();


 var value = parsedData.main.temp;
 document.getElementsByClassName('temp')[0].textContent= Math.floor(value-273)+'\xBA' +'c';

 const cloud = parsedData.weather[0].main
 document.getElementsByClassName('condition')[0].textContent=cloud;

 const max = parsedData.main.temp_max;
 const mini = parsedData.main.temp_min;

 document.getElementsByClassName('temp-range')[0].textContent=Math.floor(max-273)+'\xBA'+'c' +' / '+Math.floor(mini-273)+'\xBA'+'c'
})
