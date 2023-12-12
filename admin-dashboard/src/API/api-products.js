import config from "../config/config";

const productsList = async () => {
  try {
    let response = await fetch(`https://${config.serverURL}/api/product/`, {
      method: "GET",
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export { productsList };
