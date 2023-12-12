import config from "../config/config";

const reviewList = async () => {
  try {
    let response = await fetch(`https://${config.serverURL}/api/review/`, {
      method: "GET",
    });
    const responseData = await response.json();
    console.log("1 - api", responseData);
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export { reviewList };
