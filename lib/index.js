import WebFragment from './fragment.js'
import WebRouter from './router-warper.js'
import State from './state.js'

if (!window.state) {
  window.state = new State()
}

customElements.define('web-merge', WebFragment)
customElements.define('web-merge-router', WebRouter)
