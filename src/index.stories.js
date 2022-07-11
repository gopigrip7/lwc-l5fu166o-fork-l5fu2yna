import "@lwc/synthetic-shadow";
//import "https://unpkg.com/@salesforce-ux/design-system@2.13.1/assets/styles/salesforce-lightning-design-system.min.css";
import { createElement } from "lwc";
import App from "./app";
customElements.define('my-app', App.CustomElementConstructor);
export const story = () => "<my-app></my-app>";
