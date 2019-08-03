class MpTagListComponent extends HTMLElement {
  constructor() {
    super();
    this._tags = [];
    this._$tagList = null;
    this._root = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this._root.innerHTML = `
            <style> 
                div {
                  display: flex;
                  flex-wrap: wrap;
                  background: #f3f3f3;
                }
            </style>
            <div class="mp-tag-list"></div>
        `;

    this._$tagList = this._root.querySelector('.mp-tag-list');
  }

  get tags() {
    return this._tags;
  }

  set tags(tags) {
    this._tags = tags;
    this._render();
  }


  _render(tags) {
    this._$tagList.innerHTML = '';

    this._tags.forEach((tag) => {
      const $tag = document.createElement('mp-tag');
      $tag.innerHTML = tag;
      this._$tagList.appendChild($tag);
    });
  }
}

window.customElements.define('mp-tag-list', MpTagListComponent);