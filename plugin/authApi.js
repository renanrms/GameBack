async function authPlayer(username, password) {
  const url = new URL(`${API_BASE_URL}${resource}`);

  const response = await fetch(url.toString(), {
    headers: {
      "Content-Type": "application/json",
    },
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });

  let data;
  try {
    data = await response.json();
  } catch (e) {
    data = null;
  }

  if (!response.ok) {
    throw data;
  } else {
    return data;
  }
}

export { authPlayer };