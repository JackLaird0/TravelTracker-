import Login from "./login";

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
    }
  }
}

export default Controller;
