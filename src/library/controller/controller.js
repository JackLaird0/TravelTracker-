import Login from "../login/login";
import ClientDashboard from "../client/dashboard";

class Controller {
  constructor() {
    this.currentPage = "login";
  }

  changePage(page) {
    this.currentPage = page;
  }

  render() {
    if (this.currentPage === "login") {
      const login = new Login();
      login.render();
    } else if (this.currentPage === "clientDashboard") {
      const clientDashboard = new ClientDashboard();
      clientDashboard.render();
    }
  }
}

export default Controller;
