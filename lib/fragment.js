export default class WebFragment extends HTMLElement {
    static get observedAttributes() {
        return ['content', 'lazy']
    }
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.content = document.createElement('iframe')
        this.content.style.border = 0
        this.content.style.display = 'block'
        this.content.style.width = '100%'
        this.content.style.height = '100%'
        this.content.loading = "eager"
        this.content.innerHTML = '<slot/>'
        this.shadowRoot.append(this.content)
    }
    connectedCallback() {
    }
    disconnectedCallback() {
    }
    attributeChangedCallback(attrName, oldVal, newVal) {

        if (attrName === 'content' && oldVal !== newVal) {
            this.content.setAttribute('src', newVal)
        }

        if (attrName === 'lazy') {
            this.content.setAttribute('loading', 'lazy')
        }

    }
}

