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
import 'multiselect-combo-box/multiselect-combo-box.js';
import './shared-styles.js';

class ProviderView1 extends PolymerElement {
  static get template() {
window.addEventListener('DOMContentLoaded', function() {
  alert("oh for fuck's sake: " + document.getElementById('ppeNeed'));
  const ppeNeedComboBox = document.getElementById('ppeNeed');
    ppeNeedComboBox.items = [
      'Disinfectant/Bleach Wipes',
      'Face Shields',
      'Gloves',
      'Goggles',
      'Gowns',
      'Hand Sanitizer',
      'Masks: N95',
      'Masks: Surgical',
      'Mouth Swabs',
      'Thermometers'
    ];
    ppeNeedComboBox.selectedItems = [ ];
});
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
        <h1>I need:</h1>
        <multiselect-combo-box id="ppeNeed" placeholder="PPE item"></multiselect-combo-box>
      </div>
    `;
  }
}

window.customElements.define('ppewa-provider1', ProviderView1);



window.customElements.whenDefined('ppewa-provider1').then(function() {
  alert("oh for fuck's sake");
});
