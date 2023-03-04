{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetwortkClient {
    tryConnect(): void {
      throw OfflineError("no network!");
    }
  }

  class UserService {
    constructor(private client: NetwortkClient) {}
    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        //show dialog to user
      }
    }
  }
  const client = new NetwortkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
