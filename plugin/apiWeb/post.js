const API_BASE_URL = 'http://gameback.com';

async function post(content, resource, token=null) {
  const url = new URL(`${API_BASE_URL}${resource}`);

  if (token == null) {
    headers = { "Content-Type": "application/json" }
  }
  else {
    headers = {
      "Content-Type": "application/json",
      "X-Auth-Token": token
    }
  }

  const response = await fetch(url.toString(), {
    headers,
    method: 'POST',
    body: JSON.stringify(content),
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

export { post };