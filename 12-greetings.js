const longinForm = document.querySelector("#login-form"); 
const longinInput = document.querySelector("#login-form input"); 
const greeting = document.querySelector("#greeting"); 

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function LoginSubmit(event){ // LoginSubmit(event) event 부분은 펑션 실행 후 가장먼저 실행함
  event.preventDefault(); // ★★★ preventDefault 는 어떤event의 기본행동을 발동되지 않게 함 ★★★
  longinForm.classList.add(HIDDEN_CLASSNAME);
  const username = longinInput.value;   //ex) form의 submit은 실행 시 새로고침이 되어 값이 증발(기본값) 그걸 막음
  localStorage.setItem(USERNAME_KEY,username)
  /*                저장되는 이름,저장 값
  localStorage.setItem(getItem,remove (검사>어플리케이션>로컬스토리지>파일))
  */
  console.log(username);
  //greeting.innerText = "Hello " + username; >>>  `Hello ${username}`;   ```물결무늬

  paintGreetings(username);  // 여기의 username 은 함수의 username이 필요하니 이거를 씀
} 

function paintGreetings(potato){  //여기서 potato는 뭐가 들어가도 상관이 없다 저 두개의 자리가 같은 함수가 들어간다는 뜻일뿐 (예시)
  greeting.innerText = "Hello " + potato;  // 따로 이거 해야한다는 값이 들어가지는 않는다  {20,35 줄 참고}
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
  longinForm.classList.remove(HIDDEN_CLASSNAME);
  longinForm.addEventListener("submit", LoginSubmit)
} else {
  paintGreetings(savedUsername); //여기는 필요한게 savedUsername이니 savedUsername를 쓴다
}