const quotes = [
  {
    quote: "만약 우리가 할 수 있는 일을 모두 한다면 우리들은 우리자신에 깜짝 놀랄 것이다.",
    author: "에디슨",
  },
  {
    quote: "돈이란 바닷물과도 같다. 그것은 마시면 마실수록 목이 말라진다.",
    author: "쇼펜하우어",
  },
  {
    quote: "곧 위에 비교하면 족하지 못하나,아래에 비교하면 남음이 있다.",
    author: "명심보감",
  },
  {
    quote: "그대의 하루 하루를 그대의 마지막 날이라고 생각하라.",
    author: "호라티우스",
  },
  {
    quote: "자신을 내보여라. 그러면 재능이 드러날 것이다.",
    author: "발타사르 그라시안",
  },
  {
    quote: "작은 기회로 부터 종종 위대한 업적이 시작된다.",
    author: "데모스테네스",
  },
  {
    quote: "인생이란 학교에는 불행 이란 훌륭한 스승이 있다. 그 스승 때문에 우리는 더욱 단련되는 것이다.",
    author: "프리체",
  },
  {
    quote: "세상은 고통으로 가득하지만 그것을 극복하는 사람들로도 가득하다.",
    author: "헨렌켈러",
  },
  {
    quote: "내 비장의 무기는 아직 손안에 있다 .그것은 희망이다.",
    author: "나폴레옹",
  },
  {
    quote: "문제는 목적지에 얼마나 빨리 가느내가 아니라 그 목적지가 어디냐는 것이다.",
    author: "메이벨 뉴컴버",
  },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const toDaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// 내림.랜덤 * quotes의 갯수만큼

quote.innerText = toDaysQuote.quote;
author.innerText = toDaysQuote.author;
/*
무작위로 선택된다는 것은 그 인덱스 숫자가 랜덤으로 나온다는 것입니다. 
randomness로 인해 숫자가 0~9 사이 정수가 나오게 되는데 그럼 각 인덱스에 해당하는 object들이 있습니다. 
따라서 quote랑 author가 항상 일치될 수 밖에 없습니다. */