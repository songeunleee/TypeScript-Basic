class NetwortkClient {
  tryConnect(): void {
    throw Error("no network!");
  }
}

class UserService {
  constructor(private client: NetwortkClient) {}
}
