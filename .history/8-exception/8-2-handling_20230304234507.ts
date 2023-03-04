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

const client = new NetwortkClient();
const servise = new UserService(client);
servise.login();
