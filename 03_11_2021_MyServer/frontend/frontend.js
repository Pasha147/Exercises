async function f1() {
  const id = 5;
  const resp = await request(`http://localhost:3000/api/data`);
  console.log("front resp e:>>", resp);
}
f1();

async function request(url, method = "GET", data = null) {
  try {
    const headers = {};
    let body;
    if (data) {
      headers = {
        "Content-Type": "application/json",
        // "API-Key": "secret",
      };
      body = JSON.stringify(data);
    }

    const response = await fetch(url, {
      method,
      headers,
      body,
      // mode: "cors",
    });
    return await response.json();
  } catch (error) {
    console.log("Error", error.message);
  }
}
