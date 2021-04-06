import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
      <h1>Welcome Back, Paul</h1>
      <p>
        l
      </p>
      <p>
        <a href="/post" data-link>View recent posts</a>
      </p>
    `;
  }
}