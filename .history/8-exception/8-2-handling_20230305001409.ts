class NetwortkClient {
  tryConnect(): void {
    throw Error("no network!");
  }
}

class UserService {
  constructor(private client: NetwortkClient) {}
  login() {
    try {
      this.client.tryConnect();
    } catch {
      console.log("catched!!");
    }
  }
}

class App {
  constructor(private userService: UserService) {}
  run() {
    this.userService.login();
  }
}

const client = new NetwortkClient();
const service = new UserService(client);
const app = new App(service);
app.run();
