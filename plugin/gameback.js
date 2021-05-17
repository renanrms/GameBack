import { post } from "./apiWeb/post";
import { get } from "./apiWeb/get";

// Função para criar conta.
function register(username, password, state) {
  post({username, password, state}, '/player/register')
    .then(data => {
      return data; // Melhor analisar o conteúdo de data para retornar a parte necessária!
    });
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