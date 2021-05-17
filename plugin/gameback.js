import { authPlayer } from "./authApi";


//criar conta
function register(username, password, state) {

}

class Player {
  constructor(username, password) {
    this.state = {
      token: null,
      error: null,
      authenticated: false
    }
    authPlayer(username, password)
      .then(data => {
        this.state.token = data["X-Auth-Token"];
        this.state.authenticated = true;
      })
      .catch(error => {
        console.error(error.message);
        this.state.error = error.message;
      });
  }

  //atualizar pontuação
  updateState(state) {

  }
  //obter status
  getState() {

  }
}