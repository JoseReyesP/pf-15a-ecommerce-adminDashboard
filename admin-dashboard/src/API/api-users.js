import config from "../config/config";

const usersList = async () => {
  try {
    let response = await fetch(`https://${config.serverURL}/api/users/`, {
      method: "GET",
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export { usersList };
