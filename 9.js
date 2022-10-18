const title = document.querySelector(".heello h1");

title.style.color="blue"  //title 은 .heello 의 h1(blue)

title.addEventListener("click", titleClick); //title 이벤트 추가 "click" 하고 펑션의 titleClick 실행
//addEventListener(이벤트명, 실행할 함수명, 옵션)

title.addEventListener("mouseenter", onTheMouse); //title 이벤트 추가 "click" 하고 펑션의 titleClick 실행

title.addEventListener("mouseleave", leaveMouse); //title 이벤트 추가 "click" 하고 펑션의 titleClick 실행

window.addEventListener("resize", windowRisize)
window.addEventListener("copy", windowCpoy)
window.addEventListener("online", networkOnline)  //인터넷(wifi) On or Off 시 
window.addEventListener("offline", networkOffline)



function titleClick(){ //titleClick은 console.log("title was clicked"); 이니 클릭할때마다 title was clicked 표시
  console.log("title was clicked");
  title.style.color="White"
}

function onTheMouse(){ 
  title.innerText="Click meeee!"; 

}

function leaveMouse(){
  title.innerText="Click me!";
}

function windowRisize(){
  document.body.style.backgroundColor="mediumslateblue";
} // document 뒤에 title을 붙이면 위에 만들어둔 title을 가져오는게 아닌 html상의 title 즉 페이지 이름 가져옴
  // document.div,h1 등등 불가능 | 가능( body, head, title 등 )
  // 불가능한것들은 querySelector, getElementById 등으로 가져와야함 (8,9번 제일 위)

function windowCpoy(){
  alert("Success Copy!")
}

console.dir(title)