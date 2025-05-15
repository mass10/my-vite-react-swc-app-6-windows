import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

class MyGreeting extends HTMLElement {
  constructor() {
    super();
    const sroot = this.attachShadow({ mode: 'open' }); // Shadow DOM を作成 (任意)
    // this.shadowRoot.innerHTML = `
    sroot.innerHTML = `
      <style>
        p {
          color: blue;
        }
      </style>
      <p>Hello, <slot></slot>!</p>
    `;
  }
}

customElements.define('my-greeting', MyGreeting);

///
/// アプリケーションのエントリポイント
///

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
