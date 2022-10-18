const calcultor = { 
  plus:function(a,b) {
    return a+b; //리턴 1회용 1번 리턴 시 사라짐
  }, 
  // plusResult의 값은
  // 30번 plusResult는 calcultor.plus 이다, calcultor.plus는 (2,6) 이니 2번 plus:function에 (a,b)가 (2,6)으로 바뀐다
  // (a,b) 가 2,6 이니 3번의 2+6이 되어 8이 되고, 8을 2번줄로 리턴해서 plus(2번)는 8이된다
  // calcultor.plus이 8이라했으니      plusResult = calcultor.plus(8),        plusResult = 8 
  minus:function(a,b){
    return a-b;
  },

  multip:function(a,b){  //속의 명령어 끝났으면 ;필수  같은 대 명령어 속에 또 이어서 쓸때는 , 필수
    return a*b;
  },
  divi:function(a,b){
    return a/b;
  },
  powerOf:function(a,b){
    return a**b; //콘솔로그 사용하지 않고 값나타내기
  }
}
/*
calcultor.plus(1,5);   //css랑 같음, 어디의 어디를 뭐로 바꿔라  주소 위에부터 확실하게 
calcultor.minus(1,5);
calcultor.multip(1,5);
calcultor.divi(1,5);
calcultor.powerOf(2,5); */

const plusResult = calcultor.plus(2,6);
const minusResult = calcultor.minus(plusResult,6);
const multipResult = calcultor.multip(2,minusResult);
const diviResult = calcultor.divi(multipResult,6);
const powerOfResult = calcultor.powerOf(2,diviResult);

//콘솔에 plusResult 치면 값나옴
