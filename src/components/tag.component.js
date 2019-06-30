class MpTagComponent extends HTMLElement {
    constructor() {
        super();
        this._$text = null;
        this._root = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this._root.innerHTML = `
            <style> 
                p {
                    display: inline-block;
                    background-color: #687077;
                    color: #fff;
                    padding: 0.1rem 0.6rem;
                    border-radius: 10rem;
                }
            </style>
            <p class="mp-tag">
                <slot></slot>
            </p>
        `;

        this._$text = this._root.querySelector("p");
        const tagText = this.getAttribute("text");
        this._render(tagText);
    }

    static get observedAttributes() {
        return ['text'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        console.log(newVal);
    }
}

window.customElements.define('mp-tag', MpTagComponent);