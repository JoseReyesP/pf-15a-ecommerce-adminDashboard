import config from "../config/config";

const signin = async (user) => {
  try {
    console.log(
      "fetching: ",
      `${config.serverURL}/auth/signin/`,
      JSON.stringify(user)
    );
    let response = await fetch(`http://${config.serverURL}/auth/signin/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(user),
    });
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (err) {
    console.log(err);
  }
};

const signout = async () => {
  try {
    let response = await fetch(`${config.serverURL}/auth/signout/`, {
      method: "GET",
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { signin, signout };
