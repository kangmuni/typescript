type PageInfo = {
  title: string;
};

type Page = 'home' | 'about' | 'contact';

const nav: Record<Page, PageInfo> = {
  // 하나를 키를 쓰고 하나를 다른 타입으로 묶고싶을때(밸류) 사용
  home: { title: 'Home' },
  about: { title: 'About' },
  contact: { title: 'Contact' },
};

// 그 외의 타입

type Product = 'cat' | 'dog';
type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'

// 이 밖에도 여러가지 있는데 커맨드 눌러서 들어가서 둘러보기!
