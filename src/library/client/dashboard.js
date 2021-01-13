class ClientDashboard {
  constructor() {}

  addHtml() {
    return `<div class="client-dashboard">
              <div class="client-trips-case">
              </div>
              <div class="client-spending-case"
            </div>`;
  }

  render() {
    const mainHtml = document.querySelector("main");
    mainHtml.innerHTML += this.addHtml();
  }
}

export default ClientDashboard;
