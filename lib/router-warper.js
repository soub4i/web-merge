import Router from "./router.js"

if (!window.router) {
    window.router = new Router;
}


export default class WebRouter extends HTMLElement {
    static get observedAttributes() {
        return ['base']
    }
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.content = document.createElement('div')
        this.content.innerHTML = '<slot/>'
        this.base = "/"
        this.fragments = []
        this.currentFragment = null;

        for (let index = 0; index < this.childNodes.length; index++) {
            const item = this.childNodes[index];
            if (item && item.nodeName === "WEB-MERGE") {
                item.style.display = 'none'
                const route = item.getAttribute('route')
                this.fragments.push({ route, item, index })
            }

        }
        const render = () => this.fragments.map(fragment => {
            if (fragment.route === this.current()) {
                this.childNodes[this.currentFragment.index].style.display = 'none'
                fragment.item.style.display = 'block';
                this.currentFragment = fragment
            }

        })
        window.addEventListener('pushState', () => render());
        window.addEventListener('replaceState', () => render());

        this.shadowRoot.append(this.content)

    }
    connectedCallback() {

        this.fragments.map(fragment => {
            fragment.item.style.display = 'none'
            if (fragment.route === this.current()) {
                fragment.item.style.display = 'block';
                this.currentFragment = fragment
            }
        })
    }

    disconnectedCallback() {

    }
    attributeChangedCallback(attrName, oldVal, newVal) {

        if (attrName === 'base' && oldVal !== newVal) {
            this.base = newVal
            window.router.base = this.base
        }
    }
    current() {
        return window.location.pathname.replace(this.base, "") || "/";
    }

}



