class NetwortkClient {
  tryConnect(): void {
    throw Error("no network!");
  }
}

class UserService {
  constructor(private client: NetwortkClient) {}
  login() {
    this.client.tryConnect();
    //login....
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
service.login();

const app = new App(service);
app.run();
