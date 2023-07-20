class InfoToggle extends HTMLElement {
  constructor() {
    super();
    this._isVisibel = false;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
    #info-box {
      display: none;
    }
  </style>

    <button>Show</button>
    <p id="info-box">
      <slot></slot>
    </p>
    `;
    this._toggleBtn = this.shadowRoot.querySelector("button");
    this._infoBox = this.querySelector("p");
    this._toggleBtn.addEventListener("click", this._toggleInfo.bind(this));
  }

  connectedCallback() {
    if (this.hasAttribute("visible")) {
      if (this.getAttribute("visible") === "true") {
        this._isVisibel = true;
        this._infoBox.style.display = "block";
        this._toggleBtn.textContent = "Hide";
      }
    }
  }

  _toggleInfo() {
    this._isVisibel = true;
    this._infoBox.style = this._isVisibel ? "block" : "none";
    this._toggleBtn.textContent = this._isVisibel ? "Hide" : "Show";
  }
}

customElements.define("hh-info-toggle", InfoToggle);
