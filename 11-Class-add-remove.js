const h1 = document.querySelector("div.heello h1");
const h2 = document.querySelector("div.secondHello h1");

h1.addEventListener("click", h1Click);
h2.addEventListener("click", h2Click);
/*
function h1Click(){            // class를 전부 바꾸기에 원래있던 class도 사라짐
  if(h1.className==="clicked"){
    h1.className="";
  } else
  h1.className="clicked"
} */

function h1Click(){               //오류를 대비해 clicked 사용안하고 따로 만듬 (따로 만들어야지 오타가 있을시 console에 오류가 뜸)
  const clickedClass = "clicked";   // class 이름을 하나하나 적어서 오타가 생겨도 오타class 는 존재 가능한 class가 되기에 오류가 안뜸
  if(h1.classList.contains(clickedClass)){  //해당class가 있다면 true 없으면 false 
    h1.classList.remove(clickedClass);      //그 class가 있다면 지운다
  } else {
  h1.classList.add(clickedClass);}          //그 class가 없다면 추가한다
}

function h2Click(){         // toggle 해당 class 유무 확인 후 있으면 제거 없으면 추가        
  h2.classList.toggle("clicked");   //혼자 contains, remove, add 다함
}








/*
className  남기고 싶은 class가 있더라고 전부 변경
classList  지우지 않고 추가
*/