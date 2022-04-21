{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;
  // 내가 한 것!
  // function printLoginState(what: ResourceLoadState) {
  //   if (what.state === "loading") {
  //     console.log(`👀 ${what.state}...`);
  //   } else if (what.state === "success") {
  //     console.log(`😃${what.response.body}`);
  //   } else {
  //     console.log(`😱 ${what.reason}`);
  //   }
  // }

  function printLoginState(what: ResourceLoadState) {
    switch (what.state) {
      case "loading":
        console.log(`👀 ${what.state}...`);
        break;
      case "success":
        console.log(`😃${what.response.body}`);
        break;
      case "fail":
        console.log(`😱${what.reason}`);
        break;
      default:
        throw new Error(`unknown state: ${what}`);
    }
  }

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
