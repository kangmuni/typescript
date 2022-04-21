console.log(this);

function simpleFunc() {
  console.log(this);
}
simpleFunc();
//window.simpleFunc()
// 우리가 선언한 함수는 기본적으로 윈도우 객체에 등록된다.
console.clear();

class Counter {
  count = 0;
  increase = () => {
    // ★ 2. arrow func 방법!
    // 다른 프로그래밍 언어에서 클래스안에 this가 자기자신을 가리키는것처럼
    // 선언 된 당시에 그 당시에 문맥 그 당시에 스코프 this를 유지한다.
    console.log(this);
  };
}
const counter = new Counter();
counter.increase();
const caller = counter.increase;
// const caller = counter.increase.bind(counter); ★ 1. bind 방법
caller();
// 원래 this는 카운터를 가리키고 있었으나 카운터에 increase 포인터를 caller에 할당하므로 여기서 this의 정보를 잃어버렸다.
// let과 const로 선언한 변수는 윈도우에 등록되어 있지 않으므로!!! caller를 호출하는것은 윈도우가 아니라
// 그 어떤 오브젝트도 아니기 때문에 undefined로 나온다.

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();
// this는 Bob {run: ƒ} 로 변경된다.
// 자바스크립트는 this라는 정보 함수를 다른곳으로 할당하는 순간 잃어버릴 수 있기 때문에
// 오브젝트와 함수의 관계를 this를 꽁꽁 묶어주려면 bind를 사용한다.
