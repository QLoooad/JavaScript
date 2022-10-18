const API_KEY = "4ad1b7a5c3bae93523400e2a4408b1c4";


function onGeoOk(position){
  const lat = position.coords.latitude;    //위도(가로)
  const lng = position.coords.longitude;   //경도(세로)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  fetch(url)
  
    .then((response) => response.json()) //json 은 웹>>검사>>Network>>url>>preview 의 모든 값
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.main.temp}°C  ${data.weather[0].main} `;
      
    });
}
function onGeoError(){
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError) //위치 얻기 (성공,실패) 둘다 피드백 줘야함

`` //백틱은 안에 ${}를 넣어서 수정할때 씀