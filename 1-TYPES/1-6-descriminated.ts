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
  // success -> π body
  // fail -> π reason

  function printLoginStatebasic(state: LoginState) {
    if (state.result == "success") {
      console.log(`π${state.response.body}`);
    } else {
      console.log(`π ${state.reson}`);
    }
  }
  // μ‘°κΈ λ μ§κ΄μ μ
}
