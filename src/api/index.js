export const getUserQuery = async (query) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain");

  var raw = JSON.stringify({
    text: query,
    model: "text-davinci-003",
    temperature: 0.7,
    max_tokens: 2048,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const result = await fetch(
    "https://0pgfj5ywg2.execute-api.us-east-1.amazonaws.com/default/chatgpt-test",
    requestOptions
  )
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result?.data;
    })
    .catch((error) => console.log("error", error));

  return result;
};