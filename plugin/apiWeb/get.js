const API_BASE_URL = 'http://gameback.com';

async function get(resource, token) {
  const url = new URL(`${API_BASE_URL}${resource}`);

  headers = {
    "X-Auth-Token": token
  }
        
  const response = await fetch(url.toString(), {
    headers,
    method: 'GET',
  });

  const data = await response.json();
  if (!response.ok) {
    throw data;
  }

  return data;
}