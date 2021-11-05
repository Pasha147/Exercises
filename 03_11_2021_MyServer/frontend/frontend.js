async function f1() {
  const id = 5;
  //   const url = `https://myserverpf.herokuapp.com/api/data`;
  const url = `http://localhost:3000/api/data`;

  const resp = await request(url);
  console.log("front GET resp e:>>", resp);
}
// f1();

async function post() {
  const id = 6;
  //   const url = `http://localhost:3000/api/data`;
  const url = `https://myserverpf.herokuapp.com/api/data`;

  const data = { a: "assss", b: "BAAAA" };
  const resp = await request(url, "POST", data);
  console.log("resp-->", resp);
}

post();

async function request(url, method = "GET", data = null) {
  try {
    let headers = {};
    let body;
    if (data) {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(data);
    }

    const response = await fetch(url, {
      method,
      headers,
      body,
      //   mode: "cors",
      //   credentials: "include",
    });
    return await response.json();
  } catch (error) {
    console.log("Error", error.message);
  }
}
