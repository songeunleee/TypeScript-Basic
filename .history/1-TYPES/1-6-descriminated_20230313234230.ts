{
  //function : login -> success, fail
  type SuccessState = {
    result: "success";
    response: {
      body: String;
    };
  };
  type FailState = {
    result: "fail";
    reson: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😂 reason

  function printLoginStatebasic(state: LoginState) {
    if (state.result == "success") {
      console.log(`🎉${state.response.body}`);
    } else {
      console.log(`😂 ${state.reson}`);
    }
  }
  // 조금 더 직관적임
}
