const API_BASE_URL = "https://poderdosanguedejesus.free.beeceptor.com" 

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

// Função para criar conta.
async function register(username, password, state) {
  const response = await post({username, password, state}, '/player/register');
  return response;
}


// Classe para autenticação e todas as operações do player.
class Player {
  constructor(username, password) {
    this.state = {
      token: null,
      authenticated: false
    }
    this.username = null;

    post({username, password}, '/player/login')
      .then(data => {
        this.state.token = data["X-Auth-Token"];
        this.state.authenticated = true;
        this.username = username;
      })
  }

  getState() {
    data = get('/player/getState', this.token);
    return data["state"];
  }

  getPlayer() {
    data = get('/player/getPlayer', this.token);
    return data;
  }

  executeEvent(route, data) {
    post({route, data}, '/events', this.state.token);
  }
  
}

