/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class InitPage extends PolymerElement {

  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          @apply --layout-flex;
          flex: 1 1 auto;
          overflow: auto;
          display: flex;
          padding: 20px;
        }
        .card {
          @apply --layout-flex;
        }
        .cardicon {
          width: 100px;
        }
      </style>
      <div class="card">
        <h1>I am a:</h1>
        <a name="provider" href="[[rootPath]]provider1"><paper-button raised class="pagebutton">
          <div>
            <img class="cardicon" src="[[rootPath]]images/doctor.svg"/>
            <h2>Healthcare Provider</h2>
            I am a healthcare provider and I need PPE
          </div>
        </paper-button></a>
        <a name="donor" href="[[rootPath]]donor1"><paper-button raised class="pagebutton">
          <div>
            <img class="cardicon" src="[[rootPath]]images/health.svg"/>
            <h2>Donor</h2>
            I have PPE I would like to donate
          </div>
        </paper-button></a>
      </div>
    `;
  }
}

window.customElements.define('ppewa-initpage', InitPage);
