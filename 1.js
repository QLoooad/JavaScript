const a=12;
const b=4;
let myName='Load';
/*
const = 바뀌지않음
let = 원할때 바꿀수있음 14번 라인처럼
var = Never 쓰지마
*/

console.log(a*b);
console.log(a/b);
console.log(a+b);
console.log("Q"+myName);

myName='Line'  /*  <<<이 아래부터 적히는 myName는 Line로 변경 위는 그대로 Load
/* 
상위에 let이 되어있으면 바꾸기 전에는 Load로 
바꾸고나서는 Line로 사용 가능 */

console.log("Q"+myName);


/*
자바스크립트에서는 띄어쓰기를 대문자로 
ex) my name << x
    myName  << o
    my_name << o (대문자를 주로 사용함)
    
*/

/* 
"12" = 12 라는 텍스트
 12; = 12 라는 숫자
*/