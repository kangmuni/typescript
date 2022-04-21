{
  // Type Assertion

  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  console.log(result.length);
  // result는 hello값을 갖겠지만 result가 문자열인지 모르니 result.length 모름
  console.log((result as string).length);
  console.log((<string>result).length);
  // 얘는 string이야 라고 장담하는 법!

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); //🙅🏻‍♂️ 장담하는 경우가 아니라면 사용하지 않는게 좋다!

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers(); // 2. 여기 괄호 뒤에 ! 해도 됨
  numbers!.push(2); //🙅🏻‍♂️ 느낌표는 undefined일수없어! 장담해! 하는 칸지.. 1. 여기서 해도되고

  const button = document.querySelector("class")!;
  // const button: Element | null 이지만 정말 버튼이 있어 있다고!!! 할때 위처럼 느낌표!!
}
