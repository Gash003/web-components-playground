import { URL } from '../../config';
import { get } from '../../services';

class MpTagListContainerComponent extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({mode: 'open'});
    this._$taqList = null;
  }

  connectedCallback() {
    this._root.innerHTML = `<mp-tag-list></mp-tag-list>`;
    this._$taqList = this._root.querySelector('mp-tag-list');
    this._loadData();
  }

  _loadData() {
    get(URL.tags).then(this._attachTags.bind(this));
  }

  _attachTags({ tags }) {
    this._$taqList.tags = tags;
  }
}

window.customElements.define('mp-tag-list-container', MpTagListContainerComponent);