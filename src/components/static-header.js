class MpStaticHeader extends HTMLElement  {
    constructor() {
        super();
        console.log("My Static Header is Created!");
    }
    
    connectedCallback() {
        console.log("My Static Header added to the DOM!");
    }
    
    static get observedAttributes() {
        return ["title"];
    }
    
    attributeChangedCallback(name, oldVal, newVal) {
        console.log(`Attibute "${name}" changed: `, oldVal, newVal);
    }

    disconnectedCallback() {
        console.log("My Static Header removed the DOM!");
    }

}

window.customElements.define("mp-static-header", MpStaticHeader);