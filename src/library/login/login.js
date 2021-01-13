import { getSingleTraveler } from "../helpers/api-urls";
import { fetchGetRequest } from "../helpers/api-calls";

class Login {
  constructor() {
    this.travelerInfo = {};
  }

  handleSubmit(event) {
    event.preventDefault();
    const username = document.querySelector(".username").value;
    const userId = username.split("").slice(8, 10).join("");
    const travelerInfo = fetchGetRequest(getSingleTraveler(userId));
    console.log(travelerInfo);
    // this.travelerInfo = travelerInfo
  }

  addHtml() {
    return `<form class="login">
        <input
          type="text"
          name="username"
          class="username login-input"
          placeholder="Username"
        />
        <input
          type="text"
          name="password"
          class="login-input"
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>`;
  }

  render() {
    const mainHtml = document.querySelector("main");
    mainHtml.innerHTML += this.addHtml();
    const form = document.querySelector(".login");
    form.addEventListener("submit", (e) => this.handleSubmit(e));
  }
}

export default Login;
