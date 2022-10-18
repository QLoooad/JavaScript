const title = document.querySelector(".heello h1");




title.addEventListener("click", titleClick);


function titleClick(){ 
  const currentColor = title.style.color;
  let newColor; // 값을 안주는 이유 (어차피 색이 바뀐이후에 사용될 값인데 왜 지금 쓸대없이 줌?)
  if(currentColor==="blue"){ //===필수 = (a=b) 
    newColor="tomato";  //        == (값만 같으면 같은 것) ex) a= 3;  b= "3";    a=b true
  } else{                         //        ===( 3;, "3"; 이것도 구분함 완전히 숫자거나 명령어거나 )
    newColor="blue";
  }
  title.style.color=newColor;
}

// 해석
/* 
js는 위에서 아래로 순차적인 코드가 실행된다. 
const currentColor = title.style.color; 이다
let newColor; newColor라는 이름만 있다
1. currentColor 가 blue 라면 newColor 를 tomato 로 바꿔라
(여기서 컴퓨터는 newColor가 무었을 말하는지 모른다. 이름만 있을 뿐 역할이 정해지지 않았다.)
2. blue가 아니라면 blue로 바꾸어라
3. 그 다음 여기서 newColor의 역할이 정해진다.
   ( newColor는  title.style.color 이거다 )
4. 역할이 정해졌으니 위에 tomato 나 blue 로 이름만 정해졌던 애들한테 할일이 주어진다.
*/