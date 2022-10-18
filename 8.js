const title = document.getElementById("title");
//title 을 document(HTML)에서 id값이 title 인 것을 가져와라
const title2 = document.getElementById("title2");

title.innerText = "Got you!";
//title의 text를 "Got you!" 로 바꾸어라
console.log(title.id);
console.log(title.className);
//console 에 title의 id 와 className 를 표시해라
console.dir(title2);
//js 기준으로 title 모든 정보를 console에서 보여준다
 



//const title3 = document.querySelector(".heello h1");
                // document(HTML)에서 찾는다 class가 Re-hello 의 h1 을   ( . class  # id)
                // querySelector 찾는 class가 여러개라면 첫번째것만 가져옴
                // 모두 가져오고싶다면 querySelectorAll 사용
//console.log(title3);




