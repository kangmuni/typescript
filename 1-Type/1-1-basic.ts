{
  // number
  const num: number = 1;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined
  let age: undefined; // 💩
  let age2: number | undefined; // 이렇게 사용하는것이 좋다!
  age2 = undefined;
  age2 = 3;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let preson: null; // 💩
  let preson2: string | null; // 얘도 이렇게 사용하는것이 좋다!

  //unknown 💩 타입이 명확하지 않기에 사용하지 않는것이 좋다!
  let notSure: unknown = 0;
  notSure = "string";
  notSure = 777;
  notSure = true;

  // any 💩 얘도 마찬가지..!
  let anything: any = 0;
  anything = "he";

  // void :  함수에서 아무것도 리턴하지 않을 때 사용!
  function print(): void {
    console.log("print");
    return;
  }
  // 💩 void를 선언해서 사용하는 경우는 없음!
  let unusable: void = undefined;

  // never : 리턴하는 값이 없을거야!
  function throwError(message: string): never {
    // message -> server(log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  // object
  let obj: object; // 💩 타입이 명확하지 않기에 이것도 좋지 않다!
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "muni" });
  acceptSomeObject({ amimal: "cat" });
}
