// import sum, { print as printMessage } from "./10-3-module1.js";
// console.log(sum(2, 3));
// printMessage();

// export default로 받아오면 아무 이름이나 정의해서 사용이 가능하다.
// export default가 아닌 export로 받아오면 중괄호 안에 이름을 적어줘야한다.
// 이름을 바꾸고 싶다면 as를 사용하면 된다.

import * as calculator from "./10-3-module1.js"; // export 아이들을 전부 다 사용할때
console.log(calculator.add(2, 3));
calculator.print();
console.log(calculator.number); // 이렇게도 사용이 가능하다.
