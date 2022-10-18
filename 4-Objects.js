
// arrays 로는 무엇을 표현하는지 모를때 사용
//const 라 값을 수정못한다고 생각하지만 player의 값이 아닌 안의 값이라 수정 가능
const player = {
  name: 'QLoad',
  points: 10,
  fat: true,
};

console.log(player); //player의 모든것 
console.log(player.name); //player의 이름
console.log(player.points);

player.points=player.points + 15;  //player의 포인트의 +15 를 더해라
console.log(player.points);

player.age='19' //player의 나이 추가
console.log(player.age);

