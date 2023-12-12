import config from "../config/config";

const filter = async () => {
  try {
    let response = await fetch(
      `https://${config.serverURL}/api/filter?itemsperpage=10&actualpage=1`,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          filters: [{ filter: "category", type: "ropa hombre" }],
        }),
      }
    );
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export { filter };
