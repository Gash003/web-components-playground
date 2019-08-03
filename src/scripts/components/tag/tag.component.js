class MpTagComponent extends HTMLElement {
    constructor() {
        super();
        this._root = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this._root.innerHTML = `
            <style> 
                :host {
                    margin-right: 3px;
                    margin-bottom: 0.2rem;
                }
                p {
                    display: inline-block;
                    background-color: #687077;
                    color: #fff;
                    padding: 0.1rem 0.6rem;
                    border-radius: 10rem;
                    margin-block-start: 0;
                    margin-block-end: 0;
                }
            </style>
            <p class="mp-tag">
                <slot></slot>
            </p>
        `;
    }
}

window.customElements.define('mp-tag', MpTagComponent);