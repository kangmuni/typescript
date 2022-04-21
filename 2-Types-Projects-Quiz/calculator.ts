/**
 * Let's make a calculator 🧮
 */

// 내가 한것!
// type Message = "add" | "substract" | "multiply" | "divide" | "remainder";
// function calculate(message: Message, x: number, y: number): number {
//   if (message === "add") {
//     return x + y;
//   } else if (message === "substract") {
//     return x - y;
//   } else if (message === "multiply") {
//     return x * y;
//   } else if (message === "divide") {
//     return x / y;
//   } else if (message === "remainder") {
//     return x % y;
//   }
// }

// 엘리쌤 switch 구문 : default값이 들어오면 에러도 내뿜으니 이 구문이 더 멋진걸..
type Message = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
function calculate(message: Message, x: number, y: number): number {
  switch (message) {
    case 'add':
      return x + y;
    case 'substract':
      return x - y;
    case 'multiply':
      return x * y;
    case 'divide':
      return x / y;
    case 'remainder':
      return x % y;
    default:
      throw new Error('unknown message');
  }
}
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
