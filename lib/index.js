import WebFragment from "./fragment.js"
import State from "./state.js"


if (!window.state) {
    window.state = new State;
}

customElements.define('web-merge', WebFragment)