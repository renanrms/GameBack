import { makeUrl, serverUrl, parseJsonResponse } from './common';

export const TOKEN_KEY = "admin-token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const dispatchLogin = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const dispatchLogout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const loginAdmin = async function (username, password) {
  const url = makeUrl(serverUrl, '/admin/login')
  console.log(url)

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(response => (parseJsonResponse(response)))
}

