//   const age = parseInt(prompt('How old are you?'));
//펑션은 내부에서 외부로 실행
//prompt 는 요즘 거의 안씀
//parseInt 스트링을 넘버로 변경
//번호가 아니라면 NaN 으로 표현
//   console.log(age);


const age = parseInt(prompt('How old are you?'));

if(isNaN(age)||age<0){   //isNaN = 숫자가 아니라면 true
  console.log("Please write a real positive number.");
} else if(age<18){
  console.log("You can't drink. You're too young.")
} else if(age>=18 && age<=50){
  console.log("You can drink! Enjoy it.")
} else if(age>50 && age<=80){
  console.log("You should exercis.e")
} else if(age>80 && age<=110){
  console.log("Do whatever you want.")
} else if(age>111 && age<=150){
  console.log("It this for real?")
} else if(age>150){
  console.log("Please enter your normal age.")
}


// 숫자가 아닐경우 if실행 
// 맞을경우 else 실행  이건 세트로 실행이라 따로 지정안함


               



