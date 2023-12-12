import config from "../config/config";

const categoryList = async () => {
  try {
    let response = await fetch(`https://${config.serverURL}/api/category/`, {
      method: "GET",
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export { categoryList };
