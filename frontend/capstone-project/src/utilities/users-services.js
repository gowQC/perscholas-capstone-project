import * as usersAPI from "./users-api";

// will add new user to db
export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  localStorage.setItem("token", token);
  return getUser();
}

export async function login(credentials) {
  const token = await usersAPI.login(credentials);

  // persist the token
  localStorage.setItem("token", token);
  return getUser();
}

export function getToken() {
  // returns null if there is no string in the key "token" or the key doesn't exist
  const token = localStorage.getItem("token");
  if (!token) return null;
  const payload = JSON.parse(atob(token.split(".")[1])); // gets the encoded payload so we can decode it
  // check expiration - a JWT's expiration is expressed in milliseconds, not seconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired and we remove it from local storage
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  // If there is a token, return the user in the payload, otherwise return null
  // split the token, parse the second part of it, once you decode, access the user key in the object
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export function logOut() {
  localStorage.removeItem("token");
}
