class Tooltip extends HTMLElement {
  constructor() {
    super();

    this._tooltipIcon;
    this.tooltipVisible = false;
    this.tooltipText = "some dummy tooltip text.";
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
      div {
        background-color: black;
        color: white;
        position: absolute;
        top: 2rem;
        left: 0.75rem;
        z-index: 10;
        padding: 0.15rem;
        box-shadow: 1px 1px 6px rgba(0,0,0,0.26);
      }

      :host(.important) {
        background-color: var(--color-primary,#ccc);
      }

      :host {
        position: relative;
      }

      :host-context(p) {
        font-weight: normal;
      }

      .highlight {
        background-color: red;
      }

      ::slotted(.highlight) {
        border-bottom: 1px dotted red;
      }

      .icon {
        background-color: black;
        color: #fff;
        padding: 0.15rem;
        border-radius: 50%;
        text-align: center;
      }
    </style>
    <slot>some default</slot> 
    <span class="icon"> (?)</span>
    `;
  }
  connectedCallback() {
    if (this.hasAttribute("text")) {
      this.tooltipText = this.getAttribute("text");
    }
    this._tooltipIcon = this.shadowRoot.querySelector("span");
    this._tooltipIcon.addEventListener(
      "mouseenter",
      this._showTooltip.bind(this)
    );
    this._tooltipIcon.addEventListener(
      "mouseleave",
      this._hideTooltip.bind(this)
    );
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }
    if (name === "text") {
      this._tooltipText = newValue;
    }
  }

  static get observedAttributes() {
    return ["text"];
  }

  disconnectedCallback() {
    this._tooltipIcon.removeEventListener("mouseenter", this._showTooltip);
    this._tooltipIcon.removeEventListener("mouseleave", this._hideTooltip);
  }

  _render() {
    let tooltipContainer = this.shadowRoot.createElement('div')

    if (this.tooltipVisible) {
      tooltipContainer = document.createElement("div");
      tooltipContainer.textContent = this.tooltipText;
      this.shadowRoot.appendChild(tooltipContainer);
    } else {
      if (tooltipContainer) {
        this.shadowRoot.removeChild(tooltipContainer);
      }
    }
  }

  _showTooltip() {
    this.tooltipVisible = true;
    this._render()
  }

  _hideTooltip() {
    this.tooltipVisible = false;
    this._render()
  }
}

customElements.define("hh-tooltip", Tooltip);
