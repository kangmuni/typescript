{
  // 2.
  // 에러를 세부적으로 상속할 클래스가 존재한다고 가정.
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      // throw new Error('no network!');
      throw new OfflineError('no network!'); // 3.에러가 난 종류에 맞게 세부적인 클래스를 던졌을때
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    login() {
      this.client.tryConnect();
      // login..
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // 1.
        // show dialog to user (이곳이 UserService보다 더 의미있는 처리를 할 수 있는곳)
        // 예상하지 못한 에러가 발생한다면 핸들링할때 어디서 처리하는것이 더 의미있게 할 수 있을지, 가능한 가장 우아하게 할 수 있는곳이 어딘지 캐치하는게 중요하다.

        // 4.
        // 불행히도 catch에서 전달 된 이 에러는 any타입이기 때문에 타입에 대한 정보가 사라진다.
        if (error instanceof OfflineError) {
          // TypeScript에서 구현된 catch()에는 어떠한 타입정보도 전달되지 않아서 instanceOf를 사용할 수 없다.
          // 8-3에서 state로 만들 수 있는 방법 고고!
        }
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
