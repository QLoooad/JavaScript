function sayHello(name, age){ // sayHello (기준,기준) 이걸 5번째줄에서 정해줌
  console.log('Hello my name is ' + name + 'and i am ' + age)
}; // 'Hello my name is' 와 sayHello의 name, 'and i am'과 sayHello의 age를 보여줘라

sayHello('QLoad','18');  // name, age의 값
sayHello('QLine','20');
sayHello('QLineFirst',);


console.log('---------------------------------------');

function plus(a,b,c,d){
  console.log(a+b+c+d)
};

plus(1,5000,10,30);

const player = {
  name: 'QLoad',
  points: 10,
  fat: true,
  sayHello:function(otherName){ //여기선 function과 sayHello의 순서가 바뀜
    console.log('Hello '+otherName+' nice to meet you')
  }
};

player.sayHello('QLoad')


