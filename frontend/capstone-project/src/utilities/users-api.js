// base url for the route
const LOCAL_URL = "https://perscholas-capstone-project-backend.onrender.com";
const END_POINT = "/api/users";
const URL = LOCAL_URL + END_POINT;

export async function signUp(userData) {
  const res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // fetch requires data payloads to be stringified
    // and assigned to a body property on the options object
    body: JSON.stringify(userData),
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Sign Up");
  }
}

export async function login(credentials) {
  const res = await fetch(URL + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  // check if res was successful
  if (res.ok) {
    // this will resolve to the JWT
    return res.json();
  } else {
    throw new Error("Invalid login");
  }
}
