//   const age = parseInt(prompt('How old are you?'));
//펑션은 내부에서 외부로 실행
//prompt 는 요즘 거의 안씀
//parseInt 스트링을 넘버로 변경
//번호가 아니라면 NaN 으로 표현
//   console.log(age);


const age = parseInt(prompt('How old are you?'));

if(isNaN(age)){   //isNaN = 숫자가 아니라면 true
  console.log('Please write a number');
} else{
  console.log('Thank you for writing your age');
}


// 숫자가 아닐경우 if실행 
// 맞을경우 else 실행  이건 세트로 실행이라 따로 지정안함





