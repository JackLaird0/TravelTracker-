class Login {
  constructor() {
    this.name = "";
    this.value = "";
  }

  render() {
    const mainHtml = document.querySelector("main");
    mainHtml.innerHTML += `<form class="login">
        <input
          type="text"
          name="username"
          class="login-input"
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
}

export default Login;
