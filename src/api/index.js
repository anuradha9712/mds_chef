export const getChatData = async (componentName, query) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    component: componentName,
    query
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const result = await fetch(
    "https://mds-chef.vercel.app/api/uigenerator",
    requestOptions
  )
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((error) => console.log("error", error));

  return result;
};

export default getChatData;