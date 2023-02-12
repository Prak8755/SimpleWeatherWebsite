

const input=document.getElementById('inputbox');

const CountryName=document.getElementById('CountryName');

const StateName=document.getElementById('StateName');

const cityName=document.getElementById('cityName');


const humidity=document.getElementById('humidity');

const windSpeed=document.getElementById('windSpeed');

const temp=document.getElementById('temperature');

const weather=document.getElementById('weatherStatus');

const icon=document.getElementById('icon');

const getData= async(event)=>{
    event.preventDefault();
   if(!input.value){
    alert('please enter city name');
   return
   }

   const city=input.value;

   const fetchData = await fetch(`https://api.weatherapi.com/v1/current.json?key=2a67d6c26ed14d78bcd34345231202&q=${city}`);
  
  const orgData= await fetchData.json();
  data= orgData;
  console.log(data);
  
  CountryName.innerHTML=data.location.country;
  StateName.innerHTML=data.location.region;
  cityName.innerHTML=data.location.name;
  
  humidity.innerText=data.current.humidity;
  temp.innerText=data.current.temp_c;
  windSpeed.innerText=data.current.wind_kph;
icon.src=data.current.condition.icon;
 }



 

