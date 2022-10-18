const clock = document.querySelector("h2#clock"); 




function getClock(){
  const date = new Date();
  const hours      = String (date.getHours()).padStart(2,"0");  //.padStart(2,"0") 글의 수가 2보다 작으면 앞에 0을 붙여라 (padEnd 이건 뒤)
  const minutes    = String (date.getMinutes()).padStart(2,"0"); //String ()  << string 이외의 값을 string 로 바꿔라
  const seconds    = String (date.getSeconds()).padStart(2,"0");
  const milseconds = String (date.getMilliseconds()).padStart(3,"0");
  clock.innerText=`${hours}:${minutes}:${seconds}:${milseconds}`;
}



getClock()
setInterval(getClock, 1) // setTimeOut  ?ms 만큼 실행 지연
//setInterval(getClock, 1000) //1000ms 주기로 실행 [Interval] 반복 실행 