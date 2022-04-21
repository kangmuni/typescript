{
  // Type Inference

  let text = "hello";
  function print(message = "hello") {
    // 그냥 message만 넣어줬을 때는 any 추론됨, 이는 사용하면 안됨
    // 기본 값을 정해줬을 때, 알아서 string으로 추론됨!
    console.log(message);
  }
  print("hello");

  function add(x: number, y: number) {
    return x + y; // 알아서 리턴값이 number로 추론됨
  }

  const result = add(1, 2); // 알아서 리턴값이 number로 추론됨

  // 꼬박꼬박 타입을 다 명시 할 필요는 없다는 것 !
  // 하지만 자동으로 타입을 명시해주지만 이렇게 하는것은 좋지않다.
  // 왜냐면 위처럼 간단하게 작성하는 경우는 별로 없기에
  // 볼때 명확한것은 사용할 수 있어도, 함수 안에서는 꼭 잘 써줘야함 !

  function add2(x: number, y: number): number {
    return x + y; // 알아서 리턴값이 number로 추론됨
  }
}
