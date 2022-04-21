type Video = {
  title: string;
  author: string;
  // description: string; 여기에 하나가 더 생기면 다 수정해줘야하는 번거로움이 생김
};

// 재사용성이 높아짐
type Optional<T> = {
  [P in keyof T]?: T[P]; // for..in 여기 안에서 키는 빙글빙글 돌게 해 줌!
};

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type VideoOptional = Optional<Video>;
const videoOp: VideoOptional = {
  title: 'hero',
  author: 'muni',
};

type Animal = {
  name: string;
  age: number;
};

const animal: Optional<Animal> = {
  name: 'rabbit',
};
animal.name = 'dog'; // 변경이 가능하지만

const video: ReadOnly<Video> = {
  title: 'hi',
  author: 'nini',
};
// video.title = 'hello' 변경이 불가능

// type VideoOptional = {
//   title?: string;
//   author?: string;
//   description?: string;
// };
// type VideoReadOnly = {
//   readonly title: string;
//   readonly author: string;
//   readonly description: string;
// };

type Nullable<T> = { [P in keyof T]: T[P] | null };
const obj3: Nullable<Video> = {
  title: 'null',
  author: null,
};

type Proxy<T> = {
  get(): T;
  set(value: T): void;
};

type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>;
};

// map 타입을 이용하면 기존에 형태에서 변환된 다른것들을 해 볼 수 있다.
