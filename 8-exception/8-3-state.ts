{
  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };
  type SuccessState = {
    result: "success";
  };
  type ResultState = SuccessState | NetworkErrorState;
  class NetwortkClient {
    tryConnect(): ResultState {
      return {
        result: "fail",

        reason: "down",
      };
    }
  }
  class UserService {
    constructor(private client: NetwortkClient) {}
    login() {
      return this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      const returnData = this.userService.login();
      if (returnData.result === "success") {
        console.log("로그인 성공");
      } else {
        if (returnData.result === "fail") {
          console.log(`로그인 실패 : ${returnData.reason}`);
        } else {
          console.error("네트워크 오류가 아닌 다른 오류입니다...");
        }
      }
      // try {
      // } catch (error) {
      //   // show dialog to use
      // }
      //에상 가능할때에는 try carch를 남발하지 않고, ResultState와 같은 것들을 만들어 사용해 예외처리
    }
  }
}
