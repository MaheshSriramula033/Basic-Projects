let city=document.querySelector("input");
const apikey= "3c6e0559368b74511bb77af5edf9a34a";
const apikeyurl="https://api.openweathermap.org/data/2.5/weather?q=";
let sear_button=document.querySelector("button");
let weather_icon=document.querySelector(".weather-icon");

sear_button.addEventListener("click",()=>{
 checkWeather(city.value);
})

async function checkWeather(seacr_city){
    const response=await fetch(apikeyurl+`${seacr_city}&appid=${apikey}&units=metric`);
    const data=await response.json();
    if(response.status=="404"){   
        alert("WRONG CITY NAME"); 
        document.querySelector(".weather").style.display="none";
    }
else{
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".wind").innerHTML=data.wind.speed+"k/m";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    
    if(data.weather[0].main="Clouds"){
        weather_icon.src="clouds.png";
    }
    else if(data.weather[0].main="Rain"){
        weather_icon.src="rain.png";
    }
    else if(data.weather[0].main="Clear"){
        weather_icon.src="clear.png";
    }
    else if(data.weather[0].main="Drizzle"){
        weather_icon.src="drizzle.png";
    }
        else if(data.weather[0].main="Mist"){
            weather_icon.src="mist.png";
    }
    document.querySelector(".weather").style.display="block";
    }
}
